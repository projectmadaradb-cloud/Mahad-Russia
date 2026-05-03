# 🔒 Security Setup Guide - CRITICAL

## Environment Variables Protection

### ✅ What's Protected (Safe from Git Leaks)

Your `.gitignore` includes `.env*` pattern, which protects:
- `.env.local` ← **Contains REAL credentials (NEVER commit!)**
- `.env.development`
- `.env.production`

### ⚠️ Critical: SMTP Credentials

**Your credentials in `.env.local`:**
```
SMTP_USER=corporate@mahadmanpowers.ru
SMTP_PASS=YSxdQiuig1PU
LEAD_NOTIFY_EMAIL=corporate@mahadmanpowers.ru
```

**These must NEVER be committed to Git!**

---

## Setup Instructions

### 1. Before Pushing to GitHub

**Verify `.env.local` is NOT staged:**
```powershell
git status
# Should NOT show .env.local
```

**If `.env.local` appears in git status, REMOVE it:**
```powershell
git rm --cached .env.local  # Remove from git staging
# Then verify .gitignore has it
```

---

### 2. Local Development Setup

**Copy `.env.example` to `.env.local`:**
```powershell
Copy-Item .env.example .env.local
```

**Then edit `.env.local` with real credentials:**
- Only edit locally
- Never commit this file
- Never share the file

---

### 3. Production Deployment (GitHub Secrets)

For production deployment (e.g., Vercel, AWS Lambda), use **GitHub Secrets**:

**Add to GitHub repository:**
1. Go to: `Settings → Secrets and variables → Actions`
2. Click "New repository secret" for each:

| Secret Name | Value |
|---|---|
| `SMTP_USER` | `corporate@mahadmanpowers.ru` |
| `SMTP_PASS` | `YSxdQiuig1PU` |
| `LEAD_NOTIFY_EMAIL` | `corporate@mahadmanpowers.ru` |
| `NEXT_PUBLIC_YANDEX_VERIFICATION` | Your Yandex code |
| `YANDEX_INDEXNOW_KEY` | Your IndexNow key |

**Then in your `vercel.json` or deployment config:**
```json
{
  "env": {
    "SMTP_USER": "@SMTP_USER",
    "SMTP_PASS": "@SMTP_PASS",
    "LEAD_NOTIFY_EMAIL": "@LEAD_NOTIFY_EMAIL"
  }
}
```

---

### 4. If Credentials Are Leaked

**Immediately rotate credentials:**

1. **Zoho SMTP:**
   - Go to: https://accounts.zoho.in
   - Change password
   - Generate new App-Specific Password
   - Update `.env.local` locally
   - Update GitHub Secrets

2. **Revoke exposed credentials:**
   ```powershell
   git log --all --pretty=format:"%H" -- .env.local
   # If any commits show up, credentials are compromised
   ```

---

## Checking Current Safety

### View what's currently in `.gitignore`:
```powershell
Get-Content .gitignore
# Should contain:  .env*
```

### Verify no secrets in staged files:
```powershell
git diff --cached  # Should not show SMTP_PASS
```

### Check git config safety:
```powershell
git config --global credential.helper
# Should show a credential manager, not plaintext storage
```

---

## .env.local Template (Never Commit)

Keep this structure locally only:
```env
# Local development - NEVER commit this file!
NEXT_PUBLIC_SITE_URL=https://mahadmanpowers.ru
SMTP_USER=corporate@mahadmanpowers.ru
SMTP_PASS=YSxdQiuig1PU
LEAD_NOTIFY_EMAIL=corporate@mahadmanpowers.ru
NEXT_PUBLIC_YANDEX_VERIFICATION=[your-code]
YANDEX_INDEXNOW_KEY=[your-key]
```

---

## Files You CAN Safely Commit

✅ `.env.example` - Template with no real values  
✅ `.gitignore` - Git ignore rules  
✅ `package.json` - Dependencies (no secrets)  
✅ `next.config.js` - Configuration (no secrets)  
✅ All source code - App code (no secrets)  

---

## Pre-GitHub-Push Checklist

- [ ] `.env.local` exists locally but NOT in git
- [ ] `.env.example` has no real credentials
- [ ] `.gitignore` contains `.env*`
- [ ] Run: `git status` → `.env.local` NOT listed
- [ ] Run: `git log --all --oneline .env.local` → Shows nothing
- [ ] Ready to push to GitHub safely

---

## Quick Security Test

```powershell
# Run this before first push:
git status  # .env.local should NOT appear
git log --all --name-only -- .env.local  # Should return nothing
grep "SMTP_PASS" .gitignore  # Should return nothing (it's .env* pattern)
```

✅ **If all tests pass, safe to push to GitHub!**
