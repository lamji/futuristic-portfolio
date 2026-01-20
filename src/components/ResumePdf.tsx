import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Link } from '@react-pdf/renderer';

// Register fonts
Font.register({
  family: 'Inter',
  fonts: [
    { 
      src: 'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2',
      fontWeight: 400 
    },
    { 
      src: 'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMp1L7SUc.woff2',
      fontWeight: 600 
    },
    { 
      src: 'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMp1L7SUc.woff2',
      fontWeight: 700 
    }
  ]
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    color: '#1e293b',
    padding: 40,
    fontFamily: 'Inter',
    lineHeight: 1.5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#3b82f6',
  },
  headerLeft: {
    flex: 1,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1e40af',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 16,
    color: '#3b82f6',
    marginBottom: 8,
    fontWeight: 600,
  },
  contact: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 10,
    color: '#475569',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 4,
  },
  job: {
    marginBottom: 16,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: '#1e293b',
  },
  company: {
    fontSize: 12,
    fontWeight: 600,
    color: '#3b82f6',
  },
  period: {
    fontSize: 10,
    color: '#64748b',
    fontStyle: 'italic',
  },
  jobDescription: {
    fontSize: 10,
    color: '#334155',
    marginTop: 4,
    lineHeight: 1.4,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 8,
  },
  skillTag: {
    fontSize: 8,
    backgroundColor: '#eff6ff',
    color: '#1d4ed8',
    padding: '2px 8px',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#bfdbfe',
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 12,
  },
  education: {
    fontSize: 10,
    color: '#334155',
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'none',
  },
  summary: {
    fontSize: 10,
    color: '#334155',
    lineHeight: 1.5,
  },
});

// Resume Component
const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.name}>JICK T. LAMPAGO</Text>
          <Text style={styles.title}>Mid Frontend Developer</Text>
          <View style={styles.contact}>
            <Text style={styles.contactItem}>📧 lampagojick5@gmail.com</Text>
            <Text style={styles.contactItem}>📱 09490390624</Text>
            <Text style={styles.contactItem}>📍 Sito Crosaan, Talisay, Cebu, Philippines</Text>
            <Link 
              src="https://linkedin.com/in/yourprofile" 
              style={[styles.contactItem, styles.link]}
            >
              🌐 linkedin.com/in/yourprofile
            </Link>
          </View>
        </View>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY2</Text>
        <Text style={styles.summary}>
          Results-driven Frontend Developer with 3+ years of experience in building responsive and 
          user-friendly web applications. Proficient in React, Next.js, and modern JavaScript 
          frameworks. Passionate about creating efficient, accessible, and visually appealing 
          interfaces. Strong collaborator with experience in Agile environments and a track record 
          of delivering high-quality code.
        </Text>
      </View>

      <View style={styles.divider} />

      {/* Work Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
        
        <View style={styles.job}>
          <View style={styles.jobHeader}>
            <Text style={styles.jobTitle}>Mid Frontend Developer</Text>
            <Text style={styles.period}>2022 - Present</Text>
          </View>
          <Text style={styles.company}>Cas</Text>
          <Text style={styles.jobDescription}>
            • Collaborate with the development team to implement new features, optimize performance, 
              and maintain high-quality code for enterprise applications.
            • Lead the migration of legacy codebase to modern React with TypeScript, improving 
              maintainability and reducing bugs by 40%.
            • Implement responsive designs and ensure cross-browser compatibility.
          </Text>
          <View style={styles.skillsContainer}>
            {['React', 'TypeScript', 'Next.js', 'Redux', 'React Query', 'Material UI', 'Tailwind CSS'].map((skill, i) => (
              <Text key={i} style={styles.skillTag}>{skill}</Text>
            ))}
          </View>
        </View>

        <View style={styles.job}>
          <View style={styles.jobHeader}>
            <Text style={styles.jobTitle}>Frontend Developer</Text>
            <Text style={styles.period}>Jun 2022 - Aug 2022</Text>
          </View>
          <Text style={styles.company}>Elearnified</Text>
          <Text style={styles.jobDescription}>
            • Revamped the Moodle-based LMS for Philippine Red Cross, improving user experience 
              and accessibility.
            • Implemented responsive designs using SCSS and enhanced interactivity with JavaScript 
              and jQuery.
            • Collaborated with the design team to implement UI/UX improvements.
          </Text>
          <View style={styles.skillsContainer}>
            {['JavaScript', 'jQuery', 'SCSS', 'HTML5', 'Bootstrap', 'Moodle'].map((skill, i) => (
              <Text key={i} style={styles.skillTag}>{skill}</Text>
            ))}
          </View>
        </View>

        <View style={styles.job}>
          <View style={styles.jobHeader}>
            <Text style={styles.jobTitle}>Full Stack Developer</Text>
            <Text style={styles.period}>Mar 2021 - May 2022</Text>
          </View>
          <Text style={styles.company}>Abakada Studios</Text>
          <Text style={styles.jobDescription}>
            • Developed and maintained frontend applications using Vue.js and vanilla JavaScript.
            • Integrated Paymongo payment gateway into multiple e-commerce platforms.
            • Collaborated with backend developers to design and implement RESTful APIs.
          </Text>
          <View style={styles.skillsContainer}>
            {['Vue.js', 'JavaScript', 'Python', 'REST APIs', 'jQuery', 'Bootstrap'].map((skill, i) => (
              <Text key={i} style={styles.skillTag}>{skill}</Text>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: '48%' }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', marginTop: 4, color: '#1e293b' }}>Frontend</Text>
            <View style={styles.skillsContainer}>
              {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI'].map((skill, i) => (
                <Text key={i} style={styles.skillTag}>{skill}</Text>
              ))}
            </View>
          </View>
          <View style={{ width: '48%' }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', marginTop: 4, color: '#1e293b' }}>Backend & Tools</Text>
            <View style={styles.skillsContainer}>
              {['Node.js', 'Express', 'MongoDB', 'Git', 'REST APIs', 'CI/CD', 'Jest', 'React Testing Library'].map((skill, i) => (
                <Text key={i} style={styles.skillTag}>{skill}</Text>
              ))}
            </View>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        <View>
          <Text style={{ ...styles.jobTitle, fontSize: 12 }}>Bachelor of Science in Information Technology</Text>
          <Text style={styles.company}>University of Cebu - Main Campus</Text>
          <Text style={styles.period}>2016 - 2020</Text>
          <Text style={styles.jobDescription}>
            • Specialized in Web Development
            • Graduated with honors
            • Active member of the Developer&apos;s Club
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Resume;