# Installation Guide - Step by Step

## ⚠️ Node.js Not Detected

Node.js is required to run this project but is not currently installed on your system.

## 📥 Step 1: Install Node.js

### Option A: Download from Official Website (Recommended)

1. **Visit**: https://nodejs.org/
2. **Download**: Click the "LTS" (Long Term Support) version button
   - This will download the installer for Windows
   - LTS version is recommended for stability (currently v20.x or v18.x)
3. **Run the Installer**:
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - ✅ **IMPORTANT**: Make sure to check "Add to PATH" during installation
   - Accept the license agreement
   - Click "Install"
4. **Verify Installation**:
   - Close and reopen your terminal/PowerShell
   - Run these commands to verify:
     ```powershell
     node --version
     npm --version
     ```
   - You should see version numbers (e.g., `v20.10.0` and `10.2.3`)

### Option B: Using Chocolatey (If you have it installed)

```powershell
choco install nodejs-lts
```

### Option C: Using Winget (Windows Package Manager)

```powershell
winget install OpenJS.NodeJS.LTS
```

## 📦 Step 2: Install Project Dependencies

After Node.js is installed:

1. **Open PowerShell/Terminal** in the project directory:
   ```powershell
   cd "E:\Projects\cv website\Website"
   ```

2. **Install all dependencies**:
   ```powershell
   npm install
   ```

   This will:
   - Read `package.json`
   - Download and install all required packages
   - Create a `node_modules` folder
   - Generate/update `package-lock.json`

3. **Wait for installation to complete** (may take 2-5 minutes)

## ✅ Step 3: Verify Installation

Check that everything is installed correctly:

```powershell
# Check Node.js version (should be 16.0 or higher)
node --version

# Check npm version
npm --version

# Verify node_modules exists
Test-Path node_modules

# List installed packages
npm list --depth=0
```

## 🚀 Step 4: Run the Development Server

Once dependencies are installed:

```powershell
npm run dev
```

This will:
- Start the Vite development server
- Open your browser to `http://localhost:5173`
- Enable hot module replacement (auto-refresh on file changes)

## 📋 What Gets Installed

### Production Dependencies:
- `react` & `react-dom` - React framework
- `@fortawesome/*` - FontAwesome icons

### Development Dependencies:
- `vite` - Build tool and dev server
- `tailwindcss` - CSS framework
- `eslint` - Code linting
- And more development tools

### External (CDN - No Installation Needed):
- `particles.js` - Already configured in `index.html`

## 🐛 Troubleshooting

### Issue: "npm is not recognized"
**Solution**: 
- Restart your terminal/PowerShell after installing Node.js
- Verify Node.js is in PATH: `where.exe node`
- Reinstall Node.js and ensure "Add to PATH" is checked

### Issue: Installation fails with errors
**Solution**:
```powershell
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Reinstall
npm install
```

### Issue: Port 5173 already in use
**Solution**: Vite will automatically use the next available port, or:
```powershell
npm run dev -- --port 3000
```

## 📚 Next Steps

After installation:
1. ✅ Run `npm run dev` to start development
2. ✅ Open browser to see your portfolio website
3. ✅ Check `README.md` for more information
4. ✅ See `Particles_README.md` for particle customization

## 📞 Need Help?

- Check `REQUIREMENTS.md` for detailed requirements
- Review `README.md` for project overview
- Check browser console for any errors

---

**Ready to install Node.js?** Visit: https://nodejs.org/

