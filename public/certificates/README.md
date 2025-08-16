# Certificate Management

This folder contains the PDF certificates that are displayed in the portfolio's certification section.

## Current Certificates:

- **CompTIA Security+** - `comptia-security-plus.pdf`
- **Certified Ethical Hacker (CEH)** - `ceh-certificate.pdf`
- **CISSP Associate** - `cissp-certificate.pdf`
- **WiFi Hacker Course** - `naveen-Wifi-Hacker-course-Certificate.pdf`

## How it works:

1. Certificate files are stored in the `public/certificates/` folder
2. Each certificate in the `mockData.js` file has a `certificateFile` property pointing to the certificate PDF
3. When users click on a completed certification card, it opens the certificate in a new tab
4. Only certificates with status "Completed" or "In Progress" are clickable
5. Certificates with status "Planned" show as non-clickable with a "Certificate Pending" message

## Adding new certificates:

1. Add the PDF file to this folder
2. Update the `certifications` array in `src/data/mockData.js` with the new certificate information:
   - Include the `certificateFile` path (e.g., "/certificates/your-certificate.pdf")
   - Set appropriate status ("Completed", "In Progress", or "Planned")
   - Add relevant metadata (name, issuer, year, description, etc.)

## File naming convention:

Use descriptive, lowercase filenames with hyphens for spaces:
- ✅ `comptia-security-plus.pdf`
- ✅ `cisco-ccna-certificate.pdf`
- ❌ `Certificate 1.pdf`
- ❌ `CERT_FILE.PDF`
