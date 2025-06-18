import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
     <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; color: #1c1f2e; line-height: 1.6; }\n    a { text-decoration: none; color: inherit; }\n    .container { max-width: 1024px; margin: 0 auto; padding: 16px; }\n\n    /* Hover Effects */\n    .btn-signup:hover,\n    .btn-primary:hover,\n    .btn-secondary:hover,\n    .btn-outline:hover,\n    .cta .btn:hover {\n      opacity: 0.9;\n      transform: translateY(-2px);\n      transition: all 0.3s ease;\n    }\n\n    .subject-card:hover {\n      transform: translateY(-4px);\n      background-color: #f9faff;\n      transition: all 0.3s ease;\n    }\n\n    .feature-card:hover {\n      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n      transform: translateY(-3px);\n      transition: all 0.3s ease;\n    }\n\n    .note-card:hover {\n      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n      transform: scale(1.01);\n      transition: all 0.3s ease;\n    }\n\n    .note-card .download:hover {\n      text-decoration: underline;\n      color: #1c3cd0;\n    }\n\n    footer a:hover {\n      color: #ffcc00;\n      transition: color 0.2s ease;\n    }\n\n    header {\n      display: flex; justify-content: space-between; align-items: center;\n      padding: 16px 0;\n    }\n    .logo { font-size: 1.5rem; font-weight: bold; color: #2353FF; }\n    .btn-signup {\n      background: #2353FF; color: #fff; padding: 8px 16px;\n      border: none; border-radius: 4px; cursor: pointer;\n    }\n\n    .hero {\n      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80') center/cover no-repeat;\n      color: #fff; text-align: center;\n      padding: 80px 16px; margin-bottom: 40px;\n    }\n    .hero h1 { font-size: 2rem; margin-bottom: 16px; }\n    .hero p { font-size: 1.1rem; margin-bottom: 24px; }\n    .hero .btn-primary {\n      background: #2353FF; color: #fff; padding: 12px 24px;\n      border: none; border-radius: 4px; margin-right: 12px;\n      cursor: pointer;\n    }\n    .hero .btn-secondary {\n      background: #fff; color: #2353FF; padding: 12px 24px;\n      border: none; border-radius: 4px; cursor: pointer;\n    }\n\n    .features {\n      display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n      gap: 24px; margin-bottom: 60px;\n    }\n    .feature-card {\n      background: #f9faff; padding: 24px; border-radius: 8px;\n      display: flex; align-items: flex-start; gap: 12px;\n    }\n    .feature-card .icon { font-size: 2rem; color: #2353FF; }\n    .feature-card h3 { font-size: 1.2rem; margin-bottom: 8px; }\n    .feature-card p { color: #555; }\n\n    .subjects {\n      text-align: center;\n      margin-bottom: 60px;\n    }\n    .subjects h2 { font-size: 1.75rem; margin-bottom: 24px; }\n    .subject-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n      gap: 16px;\n      margin-bottom: 24px;\n    }\n    .subject-card {\n      background: #fff; padding: 16px; border: 1px solid #ececec;\n      border-radius: 8px; cursor: pointer;\n    }\n    .subject-card .icon {\n      font-size: 2rem; color: #2353FF; margin-bottom: 8px;\n    }\n    .subject-card h4 {\n      font-weight: bold; margin-bottom: 4px;\n    }\n    .subject-card p {\n      color: #777;\n      font-size: 0.9rem;\n    }\n    .btn-outline {\n      background: transparent; color: #2353FF;\n      border: 2px solid #2353FF;\n      padding: 8px 16px; border-radius: 4px;\n      cursor: pointer;\n    }\n\n    .recent-notes {\n      margin-bottom: 60px;\n    }\n    .recent-notes .header {\n      display: flex; justify-content: space-between;\n      align-items: center; margin-bottom: 16px;\n    }\n    .note-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n      gap: 16px;\n    }\n    .note-card {\n      border: 1px solid #ececec; \n      border-radius: 8px;\n      padding: 16px;\n      background: #fff;\n    }\n    .note-card .content .subject {\n      font-size: 0.85rem; \n      color: #2353FF; \n      margin-bottom: 4px;\n      text-transform: uppercase;\n      font-weight: bold;\n    }\n    .note-card .content h5 {\n      font-size: 1.1rem; \n      margin-bottom: 8px;\n    }\n    .note-card .content p {\n      color: #555; \n      margin-bottom: 12px;\n    }\n    .note-card .meta {\n      display: flex; \n      justify-content: space-between;\n      align-items: center;\n    }\n    .note-card .updated {\n      color: #777;\n      font-size: 0.85rem;\n    }\n    .note-card .download {\n      color: #2353FF; \n      font-weight: bold;\n      text-decoration: none;\n    }\n\n    .testimonial-wrapper {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 24px;\n      margin-bottom: 60px;\n    }\n    .testimonial {\n      flex: 1 1 48%;\n      background: #fff;\n      border: 1px solid #ececec;\n      padding: 24px;\n      border-radius: 8px;\n      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);\n      transition: all 0.3s ease;\n    }\n    .testimonial:hover {\n      transform: translateY(-4px);\n      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);\n    }\n    .testimonial .user { font-weight: bold; }\n    .testimonial .role { color: #777; margin-bottom: 12px; }\n    .testimonial .quote { font-style: italic; margin-bottom: 8px; }\n    .testimonial .ratings { color: #ffcc00; }\n\n    .cta {\n      background: #2353FF; color: #fff;\n      text-align: center; padding: 60px 16px;\n      margin-bottom: 40px;\n    }\n    .cta h2 { font-size: 1.8rem; margin-bottom: 16px; }\n    .cta .btn {\n      background: #fff; color: #2353FF; padding: 12px 24px;\n      border: none; border-radius: 4px; cursor: pointer;\n    }\n\n    footer {\n      background: #1c1f2e; color: #fff;\n      padding: 40px 16px;\n    }\n    footer .footer-container { display: flex; flex-wrap: wrap; justify-content: space-between; }\n    footer .links ul { list-style: none; }\n    footer a { color: inherit; }\n    footer .contact p { margin-bottom: 8px; }\n\n    @media (max-width: 768px) {\n      .testimonial { flex: 1 1 100%; }\n    }\n  "
    }}
  />
  <header className="container">
    <div className="logo">NotesNExam</div>
    <div>
    <button style={{ marginRight: 8 }} className="btn-signup" onClick={() => navigate('/login')}>
          Login
        </button>
     <button style={{ marginRight: 8 }} className="btn-signup" onClick={() => navigate('/signup')}>
          Signup
        </button>
    </div>
  </header>
  <section className="hero">
    <h1>Master Your Exams with NotesNExam</h1>
    <p>
      Comprehensive study notes, practice exams, and expert guidance to help you
      succeed in your academic journey.
    </p>
    <button className="btn-primary">Explore Courses</button>
    <button className="btn-secondary">Practice Now</button>
  </section>
  <div className="container">
    {/* Features */}
    <section className="features">
      <div className="feature-card">
        <div className="icon">📘</div>
        <div>
          <h3>Comprehensive Notes</h3>
          <p>
            Detailed, well‑organized study materials covering all major subjects
            and exam patterns.
          </p>
        </div>
      </div>
      <div className="feature-card">
        <div className="icon">📝</div>
        <div>
          <h3>Practice Exams</h3>
          <p>
            Realistic mock tests with detailed solutions to help you assess your
            preparation.
          </p>
        </div>
      </div>
      <div className="feature-card">
        <div className="icon">📈</div>
        <div>
          <h3>Performance Analytics</h3>
          <p>
            Track your progress with detailed analytics and personalized
            recommendations.
          </p>
        </div>
      </div>
    </section>
    {/* Subjects */}
    <section className="subjects">
      <h2>Popular Subjects</h2>
      <div className="subject-grid">
        <div className="subject-card">
          <div className="icon">💻</div>
          <h4>Computer Science</h4>
          <p>200+ Notes · 50+ Exams</p>
        </div>
        <div className="subject-card">
          <div className="icon">📐</div>
          <h4>Mathematics</h4>
          <p>180+ Notes · 45+ Exams</p>
        </div>
        <div className="subject-card">
          <div className="icon">🔬</div>
          <h4>Science</h4>
          <p>150+ Notes · 40+ Exams</p>
        </div>
        <div className="subject-card">
          <div className="icon">🏛️</div>
          <h4>Commerce</h4>
          <p>120+ Notes · 35+ Exams</p>
        </div>
      </div>
      <button className="btn-outline">View All Subjects</button>
    </section>
    {/* Recent Study Notes */}
    <section className="recent-notes">
      <div className="header">
        <h2>Recent Study Notes</h2>
        <a href="#" className="btn-outline">
          View All
        </a>
      </div>
      <div className="note-grid">
        <div className="note-card">
          <div className="content">
            <div className="subject">Computer Science</div>
            <h5>Data Structures Complete Guide</h5>
            <p>
              Comprehensive notes covering all data structures with examples and
              implementations.
            </p>
            <div className="meta">
              <span className="updated">Updated: 2 days ago</span>
              <a href="#" className="download">
                Download
              </a>
            </div>
          </div>
        </div>
        <div className="note-card">
          <div className="content">
            <div className="subject">Mathematics</div>
            <h5>Calculus Fundamentals</h5>
            <p>
              Detailed explanations of calculus concepts with solved problems
              and practice questions.
            </p>
            <div className="meta">
              <span className="updated">Updated: 1 week ago</span>
              <a href="#" className="download">
                Download
              </a>
            </div>
          </div>
        </div>
        <div className="note-card">
          <div className="content">
            <div className="subject">Science</div>
            <h5>Organic Chemistry Reactions</h5>
            <p>
              Complete list of organic chemistry reactions with mechanisms and
              examples.
            </p>
            <div className="meta">
              <span className="updated">Updated: 3 days ago</span>
              <a href="#" className="download">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Testimonials */}
    <section>
      <h2 style={{ marginBottom: 24 }}>What Students Say</h2>
      <div className="testimonial-wrapper">
        <div className="testimonial">
          <div className="user">Rahul Sharma</div>
          <div className="role">IIT JEE Aspirant</div>
          <div className="quote">
            “The physics notes helped me understand complex concepts easily. I
            improved my rank from 5000 to 1200 in just 3 months!”
          </div>
          <div className="ratings">★★★★★</div>
        </div>
        <div className="testimonial">
          <div className="user">Priya Patel</div>
          <div className="role">GATE Aspirant</div>
          <div className="quote">
            “The practice tests were exactly what I needed. They mirrored the
            actual exam pattern and helped me score in the 98th percentile.”
          </div>
          <div className="ratings">★★★★☆</div>
        </div>
      </div>
    </section>
    {/* CTA */}
    <section className="cta">
      <h2>Ready to Boost Your Exam Preparation?</h2>
      <p>
        Join thousands of students who are already acing their exams with
        NotesNExam.
      </p>
      <button className="btn">Get Started Now</button>
    </section>
  </div>
  <footer>
    <div className="container footer-container">
      <div className="links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Study Notes</a>
          </li>
          <li>
            <a href="#">Practice Exams</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
      <div className="links">
        <h3>Subjects</h3>
        <ul>
          <li>
            <a href="#">Computer Science</a>
          </li>
          <li>
            <a href="#">Mathematics</a>
          </li>
          <li>
            <a href="#">Physics</a>
          </li>
          <li>
            <a href="#">Chemistry</a>
          </li>
          <li>
            <a href="#">Commerce</a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h3>Contact Us</h3>
        <p>📍 123 Education Street, Learning City, 560001</p>
        <p>✉️ support@notesnexam.in</p>
        <p>📞 +91 98765 43210</p>
      </div>
    </div>
  </footer>
</>

    </>
  );
}
