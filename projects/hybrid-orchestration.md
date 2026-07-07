---
title: "Hybrid Orchestration & System-Level Automation"
tech: "Playwright, AutoHotkey v2, Binary Patching"
desc: "Developed headless web automation pipelines utilizing Playwright and Chrome DevTools to orchestrate complex data extraction. Authored system-level background macros (AHK v2) featuring real-time tooltip feedback."
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
---
## The Challenge
Modern enterprise environments are often highly fragmented. Business-critical workflows frequently span across legacy desktop applications, strict operating system file locks, and dynamic web portals. Traditional automation tools typically fail at the boundary between the browser and the desktop OS. 

The objective was to engineer a robust, hybrid orchestration pipeline that could seamlessly transition data between headless web environments and locked-down Windows desktop interfaces without triggering enterprise security flags or requiring manual user intervention.

## The Web Layer: Playwright & CDP
To handle the web-based extraction and navigation, I implemented **Playwright**. Unlike standard Selenium wrappers, Playwright interacts directly with the browser engine, allowing for true headless execution and advanced DOM manipulation.

- **Chrome DevTools Protocol (CDP):** Leveraged direct CDP sessions to intercept network requests, bypass complex frontend authentication challenges, and manipulate HTTP headers on the fly.
- **Asynchronous Data Pipelines:** Engineered robust asynchronous queues in Node.js to concurrently scrape, normalize, and export large datasets into intermediate JSON payloads.

## The OS Layer: AutoHotkey v2
Once the data breached the browser boundary, the pipeline required system-level permissions to interact with legacy applications that completely lacked modern REST APIs. 

I authored highly optimized **AutoHotkey v2 (AHK v2)** scripts to act as the physical bridge:
- **Memory & Window Hooks:** Interfaced directly with the Win32 API (`DllCall`) to hook into specific application windows, entirely bypassing graphical pixel-search unreliability.
- **Real-Time Telemetry:** Engineered custom GUI tooltips and system tray notifications that provide end-users with live telemetry on macro execution states and data payloads.
- **Binary Patching Integration:** For highly resistant legacy applications, I integrated lightweight binary patches to bypass artificial application pauses, drastically reducing total execution time.

## The Outcome
The resulting hybrid pipeline reduced manual data-entry bottlenecks from **hours to seconds**. By effectively bridging the gap between Node.js headless browsers and Windows system-level executables, the architecture achieved a zero-touch orchestration flow capable of running silently in the background of active employee workstations.
