import { toast } from 'sonner';

export const generatePdf = async () => {
  // Toggle to show/hide featured projects section
  const showFeaturedProjects = false;
  
  try {
    // Show loading state
    toast.loading('Opening print dialog...');

    // Create a hidden iframe
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // Set the iframe content with proper typing
    const contentWindow = iframe.contentWindow as
      | (Window & typeof globalThis & { document: Document })
      | null;
    const doc = iframe.contentDocument || contentWindow?.document;
    if (!doc) {
      throw new Error('Failed to create print document');
    }

    // Get the resume element
    const resumeElement = document.getElementById('resume');
    if (!resumeElement) {
      throw new Error('Resume content not found');
    }

    // Clone the resume element to avoid modifying the original

    // Add print styles
    const style = document.createElement('style');
    style.textContent = `
      @page { margin: 1cm; }
      body { 
        font-family: Arial, sans-serif; 
        line-height: 1.6; 
        color: #333;
        padding: 20px;
      }
      h1 { color: #2563eb; margin-bottom: 0.5em; }
      h2 { 
        color: #1e40af; 
        border-bottom: 2px solid #e5e7eb;
        padding-bottom: 0.3em;
        margin-top: 1.5em;
      }
      .job { margin-bottom: 1.5em; }
      .job-header { display: flex; justify-content: space-between; }
      .job-title { font-weight: bold; font-size: 1.1em; }
      .company { color: #4b5563; font-weight: bold; }
      .period { color: #6b7280; font-style: italic; }
      .skills { margin-top: 1em; }
      .skill-tag {
        display: inline-block;
        background: #e0f2fe;
        color: #0369a1;
        padding: 0.2em 0.6em;
        border-radius: 9999px;
        margin: 0.2em;
        font-size: 0.85em;
      }
      @media print {
        a { text-decoration: none; color: inherit; }
        .no-print { display: none; }
      }
    `;

    // Create the document
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Jick T. Lampago - Resume</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #1e293b;
              padding: 20px;
              max-width: 800px;
              margin: 0 auto;
              display: flex;
              gap: 20px;
            }
            .left-column {
              flex: 2;
              padding-right: 20px;
              border-right: 2px solid #e5e7eb;
            }
            .right-column {
              flex: 1;
              padding-left: 20px;
            }
            .header {
              margin-bottom: 20px;
              padding-bottom: 20px;
              border-bottom: 2px solid #3b82f6;
            }
            .header-left { flex: 1; }
            .name {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 4px;
              color: #1e40af;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .title {
              font-size: 12px;
              color: #4b5563;
              margin-bottom: 12px;
            }
            .contact { font-size: 9px; }
            .contact-item { margin: 2px 0; }
            .section {
              margin-bottom: 16px;
            }
            .section-title {
              font-size: 14px;
              font-weight: bold;
              color: #1e40af;
              margin: 16px 0 8px;
              border-bottom: 1px solid #e5e7eb;
              padding-bottom: 4px;
            }
            .summary {
              font-size: 9px;
              color: #334155;
              line-height: 1.5;
            }
            .job { margin-bottom: 16px; }
            .job-header {
              display: flex;
              justify-content: space-between;
              margin-bottom: 4px;
            }
            .job-title {
              font-weight: bold;
              font-size: 11px;
            }
            .company {
              color: #4b5563;
              font-weight: bold;
              font-size: 10px;
            }
            .period {
              color: #6b7280;
              font-style: italic;
              font-size: 9px;
            }
            .job-description {
              font-size: 9px;
              margin: 6px 0 8px;
              line-height: 1.4;
            }
            .skills-container {
              display: flex;
              flex-wrap: wrap;
              gap: 3px;
            }
            .skill-tag {
              background: #e0f2fe;
              color: #0369a1;
              padding: 1px 6px;
              border-radius: 10px;
              font-size: 8px;
              display: inline-block;
            }
            .divider {
              height: 1px;
              background-color: #e5e7eb;
              margin: 12px 0;
            }
            .education-item {
              margin-bottom: 12px;
            }
            .reference-item {
              margin-bottom: 8px;
            }
            @media print {
              a { text-decoration: none; color: inherit; }
              .no-print { display: none; }
              body {
                padding: 10px;
                font-size: smaller;
              }
            }
          </style>
        </head>
        <body>
          <div class="left-column">
            <div class="header">
              <div class="header-left">
                <div class="name">JICK T. LAMPAGO</div>
                <div class="title">Frontend Developer</div>
                <div class="contact">
                  <div class="contact-item">📧 lampagojick5@gmail.com</div>
                  <div class="contact-item">📱 09490390624</div>
                  <div class="contact-item">📍 Sitio Crossan, Talisay, Cebu, Philippines</div>
                  <a href="https://www.linkedin.com/in/jick-lampago" class="contact-item">
                    🌐 https://www.linkedin.com/in/jick-lampago
                  </a>
                  <a href="https://www.jicklampago.xyz" class="contact-item">
                    🌐 https://www.jicklampago.xyz
                  </a>
                </div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">PROFESSIONAL SUMMARY</div>
              <div class="summary">
                ${(() => {
                  const startDate = new Date('2020-03-01');
                  const now = new Date();
                  const years = now.getFullYear() - startDate.getFullYear();
                  const months = now.getMonth() - startDate.getMonth();
                  const totalMonths = years * 12 + months;
                  const experienceYears = (totalMonths / 12).toFixed(1);

                  return `Results-driven Frontend Developer with ${experienceYears} years of experience in building responsive and 
                  user-friendly web applications. Proficient in React, Next.js, and modern JavaScript 
                  frameworks. Passionate about creating efficient, accessible, and visually appealing 
                  interfaces. Strong collaborator with experience in Agile environments and a track record 
                  of delivering high-quality code.`;
                })()}
              </div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <div class="section-title">WORK EXPERIENCE</div>
              
              <div class="job">
                <div class="job-header">
                  <span class="job-title">Mid Frontend Developer</span>
                  <span class="period">2022 - Present</span>
                </div>
                <div class="company">Commerce Acceptance Solution. Inc</div>
                <div class="job-description">
                  • Develop and maintain secure, high-traffic web applications focused on payment processing, e-commerce workflows, and admin portals.<br>
                  • Contribute to the frontend of payment gateway–related systems, ensuring secure handling of sensitive data and compliance with best practices.<br>
                  • Led the modernization of a legacy JavaScript codebase to React + TypeScript, significantly improving code reliability, maintainability, and reducing production issues by ~40%.<br>
                  • Build role-based admin dashboards for transaction monitoring, order management, and system configuration.<br>
                  • Implement scalable state management and data fetching using Redux and React Query, ensuring consistent and predictable UI behavior.<br>
                  • Collaborate closely with backend, QA, and product teams to deliver secure, performance-optimized user experiences.<br>
                  • Apply accessibility standards and responsive design principles for cross-device and cross-browser compatibility.
                </div>
              </div>

              <div class="job">
                <div class="job-header">
                  <span class="job-title">Frontend Developer</span>
                  <span class="period">Jun 2022 - Aug 2022</span>
                </div>
                <div class="company">Elearnified</div>
                <div class="job-description">
                  • Revamped the Moodle-based LMS for Philippine Red Cross, improving user experience 
                    and accessibility.<br>
                  • Implemented responsive designs using SCSS and enhanced interactivity with JavaScript 
                    and jQuery.<br>
                  • Collaborated with the design team to implement UI/UX improvements.
                </div>
              </div>

              <div class="job">
                <div class="job-header">
                  <span class="job-title">React.js Developer</span>
                  <span class="period">Nov 2020 - Dec 2020</span>
                </div>
                <div class="company">Codally Tech</div>
                <div class="job-description">
                  • Part of the UI development team working on A+ Learning platform, an online school platform during pandemic<br>
                  • Developed the entire UI using Next.js and Material UI following Agile methodology<br>
                  • Collaborated with team members to implement responsive and user-friendly designs<br>
                  • Contributed to the development of educational features for the online learning platform
                </div>
              </div>

              <div class="job">
                <div class="job-header">
                  <span class="job-title">Full Stack Developer</span>
                  <span class="period">Mar 2021 - May 2022</span>
                </div>
                <div class="company">Abakada Studios</div>
                <div class="job-description">
                  • Developed and maintained frontend applications using Vue.js and vanilla JavaScript.<br>
                  • Integrated Paymongo payment gateway into multiple e-commerce platforms.<br>
                  • Collaborated with backend developers to design and implement RESTful APIs.
                </div>
              </div>
            </div>
          </div>

          <div class="right-column">
            <div class="section">
              <div class="section-title">TECHNICAL SKILLS</div>
              
              <div style="font-size: 10px; font-weight: bold; margin: 4px 0; color: #1e293b;">Frontend Development</div>
              <div class="skills-container">
                ${[
                  'React',
                  'Next.js',
                  'TypeScript',
                  'Tailwind CSS',
                  'Redux',
                  'React Query',
                  'Shadcn/ui',
                  'Material UI',
                ]
                  .map(skill => `<span class="skill-tag">${skill}</span>`)
                  .join('')}
              </div>

              <div style="font-size: 10px; font-weight: bold; margin: 8px 0 4px; color: #1e293b;">Mobile Development</div>
              <div class="skills-container">
                ${['React Native', 'Expo', 'iOS', 'Android', 'Mobile UI/UX', 'Native Modules']
                  .map(skill => `<span class="skill-tag">${skill}</span>`)
                  .join('')}
              </div>

              <div style="font-size: 10px; font-weight: bold; margin: 8px 0 4px; color: #1e293b;">Backend Development</div>
              <div class="skills-container">
                ${['Node.js', 'Express', 'REST APIs', 'MongoDB']
                  .map(skill => `<span class="skill-tag">${skill}</span>`)
                  .join('')}
              </div>

              <div style="font-size: 10px; font-weight: bold; margin: 8px 0 4px; color: #1e293b;">DevOps & AI Tools</div>
              <div class="skills-container">
                ${['Git', 'CI/CD', 'ChatGPT', 'GitHub Copilot', 'Windsurf']
                  .map(skill => `<span class="skill-tag">${skill}</span>`)
                  .join('')}
              </div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <div class="section-title">EDUCATION</div>
              
              <div class="education-item">
                <div style="font-weight: bold; font-size: 10px;">Apprenticeship in Full Stack Web Developer</div>
                <div class="company" style="font-size: 9px;">Tuitt Bootcamp Ph</div>
                <div class="period" style="font-size: 8px;">June 2020 - October 2020</div>
              </div>

              <div class="education-item">
                <div style="font-weight: bold; font-size: 10px;">Associated Course in Information Technology</div>
                <div class="company" style="font-size: 9px;">Cataingan Polytechnic Institute</div>
                <div class="period" style="font-size: 8px;">March 2011 - June 2013</div>
              </div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <div class="section-title">CHARACTER REFERENCE</div>
              
              <div class="reference-item">
                <div style="font-weight: bold; font-size: 10px;">John Jason Gesulgon</div>
                <div class="company" style="font-size: 9px;">Development Manager</div>
                <div style="margin-top: 2px;">
                  <div style="font-size: 8px; color: #6b7280;">📧 jjgesulgon@gmail.com</div>
                  <div style="font-size: 8px; color: #6b7280;">📱 09258696132</div>
                </div>
              </div>

              <div class="reference-item">
                <div style="font-weight: bold; font-size: 10px;">Emmanuel Ganzon</div>
                <div class="company" style="font-size: 9px;">Personal Friend</div>
                <div style="margin-top: 2px;">
                  <div style="font-size: 8px; color: #6b7280;">📧 emmanuel.ganzon93@gmail.com</div>
                  <div style="font-size: 8px; color: #6b7280;">📱 09569144288</div>
                </div>
              </div>
            </div>
            ${showFeaturedProjects ? `
            <div class="divider"></div>

            <div class="section">
              <div class="section-title">FEATURED PROJECTS</div>
              
              <div class="project-item" style="margin-bottom: 12px;">
                <div style="font-weight: bold; font-size: 10px; color: #1e40af;">ScaleWeb</div>
                <div style="font-size: 8px; color: #6b7280; margin-bottom: 2px;">🌐 scale-web-company.vercel.app</div>
                <div class="skills-container" style="margin-top: 3px;">
                  ${['React', 'Node.js', 'Next.js', 'Tailwind CSS', 'shadcn/ui']
                    .map(skill => `<span class="skill-tag">${skill}</span>`)
                    .join('')}
                </div>
              </div>

              <div class="project-item" style="margin-bottom: 12px;">
                <div style="font-weight: bold; font-size: 10px; color: #1e40af;">iSolar</div>
                <div style="font-size: 8px; color: #6b7280; margin-bottom: 2px;">🌐 i-solar.vercel.app</div>
                <div class="skills-container" style="margin-top: 3px;">
                  ${['React', 'Node.js', 'Next.js', 'Tailwind CSS', 'shadcn/ui']
                    .map(skill => `<span class="skill-tag">${skill}</span>`)
                    .join('')}
                </div>
              </div>

              <div class="project-item" style="margin-bottom: 12px;">
                <div style="font-weight: bold; font-size: 10px; color: #1e40af;">Capture Studio</div>
                <div style="font-size: 8px; color: #6b7280; margin-bottom: 2px;">🌐 swt-004-photography.vercel.app</div>
                <div class="skills-container" style="margin-top: 3px;">
                  ${['Next.js', 'TypeScript', 'shadcn/ui', 'Tailwind CSS']
                    .map(skill => `<span class="skill-tag">${skill}</span>`)
                    .join('')}
                </div>
              </div>

              <div class="project-item" style="margin-bottom: 12px;">
                <div style="font-weight: bold; font-size: 10px; color: #1e40af;">Portfolio Website</div>
                <div style="font-size: 8px; color: #6b7280; margin-bottom: 2px;">🌐 swt-002-company-brand.vercel.app</div>
                <div class="skills-container" style="margin-top: 3px;">
                  ${['Next.js', 'Tailwind CSS', 'Framer Motion']
                    .map(skill => `<span class="skill-tag">${skill}</span>`)
                    .join('')}
                </div>
              </div>
            </div>` : ''}
          </div>
        </body>
      </html>
    `);
    doc.close();

    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 500));

    // Trigger print
    if (iframe.contentWindow) {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    }

    // Cleanup
    setTimeout(() => {
      document.body.removeChild(iframe);
      toast.dismiss();
    }, 1000);

    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    toast.error('Failed to generate PDF. Please try printing the page manually.');
    return false;
  }
};
