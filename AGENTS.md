# AGENTS.md

## Project: Redirect Website

A Bun.js full-stack website that displays a modal with a redirect message in German.

### Files
- `server.ts` - Main server file
- `styles.css` - CSS styles for the modal

### Commands
- `bun run server.ts` - Start the development server
- `REDIRECT_URL=https://example.com bun run server.ts` - Start with custom redirect URL

### Environment Variables
- `REDIRECT_URL` - The URL to redirect to (default: https://example.com)