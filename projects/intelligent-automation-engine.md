---
layout: project.njk
title: "Intelligent Headless Automation Engine"
tech: "Python, Playwright, Llama 3.2, DOM Traversal"
desc: "An analytical evaluation of combining deterministic headless browser automation (Playwright) with probabilistic language models (Llama 3.2) for mass data extraction and intelligent form processing."
image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
tags: projects
---
## 1. Core Topic Definition
The "Intelligent Automation Engine" represents the synthesis of traditional, deterministic web scraping methodologies with modern, probabilistic natural language processing (NLP). This system is designed to autonomously navigate complex, dynamic web applications, extract unstructured data, and evaluate that data against predefined semantic criteria using local Edge AI.

## 2. Historical Context & Current State
Web automation historically relied on brittle technologies like Selenium or BeautifulSoup. These tools required engineers to hardcode exact CSS selectors or XPath queries, meaning the pipeline would instantly fracture upon any minor UI update by the host website. The field progressed toward headless browsers (Playwright, Puppeteer) which could render JavaScript-heavy Single Page Applications (SPAs). However, the extraction logic remained rigid. The current paradigm shift involves feeding the raw Document Object Model (DOM) to an LLM, allowing the AI to probabilistically infer the location and meaning of dynamic elements.

## 3. Methodologies & Breakthroughs
- **Playwright DOM Orchestration:** The engine utilizes Playwright to spin up headless Chromium instances, bypassing standard bot-detection mechanisms by simulating realistic human input timings, mouse jitter, and complete viewport rendering.
- **Llama 3.2 Semantic Evaluation:** Instead of relying on regex patterns to clean extracted data, the raw textual output is piped into a local Llama 3.2 instance. The LLM acts as an autonomous evaluator, instantly classifying data sets, flagging anomalies, and reformatting unstructured paragraphs into strict JSON schemas. This allows the system to process massive datasets (e.g., hundreds of resumes or technical logs) and execute triage decisions entirely offline.

## 4. Current Challenges & Limitations
- **DOM Size Exhaustion:** Modern web applications contain massive, heavily nested DOM trees. Piping a raw, unminified DOM directly into an LLM quickly exceeds standard context windows. Effective operation requires intermediate preprocessing layers to strip away non-semantic HTML tags (divs, spans, scripts) and isolate the core textual content before inference.
- **Probabilistic Hallucination in Workflows:** Because LLMs are non-deterministic, using them to generate XPath or CSS selectors on the fly can occasionally result in hallucinations, causing the automation script to click incorrect elements or hang indefinitely.

## 5. Practical Applications & Future Trajectories
The system is heavily utilized for mass administrative automation—rapidly scraping IT job boards, cross-referencing candidate criteria against open roles, and auto-filling complex multi-page corporate forms. Moving forward, the engine will integrate multimodal capabilities, allowing the AI to "see" screenshots of the browser viewport rather than parsing the HTML code, bridging the gap toward true, human-like visual web orchestration.
