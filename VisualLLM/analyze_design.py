import base64
from openai import OpenAI

# 1. Connect to your local llama.cpp server
client = OpenAI(base_url="http://localhost:8080/v1", api_key="local-agent")

# 2. Encode your website screenshot (with automatic resizing to prevent GPU crashes)
image_path = "screencapture-alexander-luciano-github-io-portfolio-2026-07-07-06_50_34.png" # Change this to your image file

import io
from PIL import Image

with Image.open(image_path) as img:
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    max_size = 1024 # Resize down to fit in VRAM and avoid TDR timeouts
    if img.width > max_size or img.height > max_size:
        img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
        
    buffer = io.BytesIO()
    img.save(buffer, format="PNG")
    base64_image = base64.b64encode(buffer.getvalue()).decode('utf-8')

print("Sending image to local Qwen2.5-VL agent...")

# 3. Send the request
response = client.chat.completions.create(
    model="qwen2.5-vl-7b-instruct",
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "text", 
                    "text": "Act as an elite UX/UI Designer. Critique this website's typography, color harmony, and visual balance. What 3 things would you change to make it look more premium?"
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": f"data:image/png;base64,{base64_image}"
                    }
                }
            ]
        }
    ],
    temperature=0.4,
)

print("\n=== DESIGN CRITIQUE ===")
print(response.choices[0].message.content)
