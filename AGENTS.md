# AGENTS Guidelines for This Repository

This repository contains a Next.js application for listing Avalanche subnets, validators, and projects. When working on the project interactively with an agent (e.g. the Codex CLI) please follow the guidelines below for efficient development and community contributions.

## 1. Use Development Server for Testing

* **Always use `npm run dev`** for local development.
* **Test changes** at http://localhost:3000.
* **Do _not_ deploy to production** during agent development sessions.
* **Verify JSON validity** before committing changes.

## 2. Keep Dependencies in Sync

If you update dependencies:

1. Install packages with `npm install`.
2. Update specific packages with `npm update <package>`.
3. Verify compatibility with Next.js 12 and React 17.
4. Test Material-UI components after updates.

## 3. Development Workflow

Follow the Next.js workflow:

1. **Start dev server**: Run with hot-reload
   ```bash
   npm run dev
   ```

2. **Build production**: Create optimized build
   ```bash
   npm run build
   ```

3. **Export static**: Generate static site
   ```bash
   npm run export
   ```

4. **Build and export**: Combined command
   ```bash
   npm run build2
   ```

## 4. Adding Content

### Add New Subnet
Edit `components/chain/subnets.json`:
```json
{
  "name": "SubnetName",
  "chain": "chain-identifier",
  "title": "Display Name",
  "description": "Max 150 characters",
  "projectURL": "https://project.com",
  "isLive": true,
  "nativeCurrency": {
    "name": "Token",
    "symbol": "TKN",
    "decimals": 18
  },
  "chainId": "0x12345",
  "rpc": "https://rpc-endpoint.com",
  "blockchain": "Avalanche",
  "subnetId": "subnet-id",
  "validators": 10,
  "faucets": ["https://faucet.com"],
  "explorers": ["https://explorer.com"]
}
```

### Add New Validator
Edit `components/validator/validators.json`:
```json
{
  "nodeID": "NodeID-xxxxxxx",
  "totalStake": 23496,
  "feePercentage": 2,
  "openToValidate": true,
  "contactURL": "https://contact.com"
}
```

### Add New Project
Edit `components/project/projects.json`:
```json
{
  "name": "Project Name",
  "description": "Brief description",
  "logo": "/logos/project.jpg",
  "website": "https://project.com"
}
```

## 5. File Management

When adding logos or images:

1. Place logos in `public/logos/`.
2. Use JPG or PNG format.
3. Optimize images for web (< 100KB preferred).
4. Reference as `/logos/filename.jpg` in JSON.

## 6. JSON Validation

Before committing JSON changes:

* Validate JSON syntax.
* Check required fields are present.
* Verify chainId is in hex format (0x prefix).
* Ensure URLs are valid and use HTTPS.
* Test MetaMask integration if adding RPC.

## 7. Component Development

When modifying components:

* Follow existing structure in `components/`.
* Use Material-UI components consistently.
* Maintain CSS modules for styling.
* Keep components modular and reusable.
* Test responsive design.

## 8. Testing Checklist

Before creating PR:

- [ ] JSON files are valid
- [ ] New subnets display correctly
- [ ] MetaMask add button works
- [ ] Validators list properly
- [ ] Projects page loads
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Build completes successfully

## 9. Pull Request Guidelines

When submitting PR:

1. Fork the repository
2. Create feature branch
3. Make minimal changes
4. Test thoroughly locally
5. Submit PR with clear description
6. Include relevant subnet/project details

## 10. Common Development Tasks

### Test MetaMask Integration
1. Add subnet to subnets.json
2. Include valid RPC and chainId
3. Test "Add to MetaMask" button
4. Verify network switches correctly

### Update Validator Information
1. Edit validators.json
2. Verify nodeID format
3. Test contact URL
4. Check display on validators page

### Add Project Logo
1. Optimize image (< 100KB)
2. Save to public/logos/
3. Reference in projects.json
4. Verify display on projects page

## 11. Code Quality Checks

| Command | Purpose |
| ------- | ------- |
| `npm run build` | Verify build succeeds |
| JSON validators | Check JSON syntax |
| Browser DevTools | Check for errors |
| Network tab | Verify asset loading |

## 12. Deployment Process

The site auto-deploys on merge to main:

1. Create and test changes locally
2. Submit PR with changes
3. Wait for review
4. Merge triggers deployment
5. Verify at https://subnetlist.org

## 13. Useful Commands Recap

| Command | Purpose |
| ------- | ------- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build production |
| `npm run export` | Export static site |
| `npm run build2` | Build and export |

## 14. Troubleshooting

### Common Issues

**"JSON parse error"**
- Validate JSON syntax
- Check for trailing commas
- Verify quotes are proper

**"Build failed"**
- Check all imports exist
- Verify image paths
- Review console errors

**"MetaMask add failed"**
- Verify chainId format (0x)
- Check RPC endpoint valid
- Ensure all required fields present

---

Following these practices ensures smooth development, maintains data integrity, and enables reliable community contributions. Always validate JSON changes and test thoroughly before submitting pull requests.