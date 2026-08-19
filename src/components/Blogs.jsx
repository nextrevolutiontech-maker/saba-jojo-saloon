import React, { useState } from 'react';
import blog1 from '../assets/blog-1.png';
import blog2 from '../assets/blog-2.png';

const BLOGS_DATA = [
  {
    id: 1,
    title: "5 Essential Tips for Silky & Healthy Hair",
    date: "August 18, 2026",
    readTime: "4 min read",
    author: "Saba (Master Stylist)",
    image: blog1,
    excerpt: "Learn how to maintain your hair's natural shine and strength with simple expert tips from SJ stylists.",
    content: `Maintaining hair integrity requires daily nourishment and thermal protection. Here are the top 5 routines recommended by Saba Jojo experts:
    1. **Deep Conditioning Mask:** Apply an argan oil deep conditioning treatment once a week to restore moisture lost to heat and styling.
    2. **Heat Protection:** Never blow-dry or flat-iron without applying a silk protein heat protectant serum.
    3. **Scalp Massages:** Stimulate natural oil production by massaging your scalp with warm hair oil 30 minutes before washing.
    4. **Avoid Hot Water:** Always rinse hair with lukewarm or cold water to seal the cuticles and trap shine.
    5. **Regular Trims:** Trim split ends every 6-8 weeks to prevent breakage from traveling up the hair shaft.`
  },
  {
    id: 2,
    title: "Summer Skin Hydration & Glowing Essentials",
    date: "August 15, 2026",
    readTime: "5 min read",
    author: "Maria (Skin Specialist)",
    image: blog2,
    excerpt: "Discover the must-have skincare products and facial routines to keep your skin hydrated and glowing all summer long.",
    content: `Summer humidity in Karachi requires lightweight, non-comedogenic hydration formulas. 
    - **Hyaluronic Acid Serums:** Lock in moisture without adding heavy oils to your pores.
    - **Broad Spectrum Sunscreen SPF 50+:** Protect against UV damage and dark pigmentation spots. Reapply every 3 hours outdoors.
    - **Weekly Exfoliation:** Use gentle AHA/BHA exfoliants to sweep away dead skin cells and unblock sweat pores.
    - **Whitening Glow Facials:** Schedule a monthly professional salon facial to reset skin tone and boost collagen elasticity.`
  },
  {
    id: 3,
    title: "Top Bridal Makeup & Glamour Trends for 2026",
    date: "August 10, 2026",
    readTime: "6 min read",
    author: "Jojo (Makeup Lead)",
    image: blog1,
    excerpt: "From dewy minimalist glows to dramatic regal statements, explore the top bridal makeup trends of the season.",
    content: `Bridal beauty in 2026 embraces timeless elegance paired with high-definition longevity:
    - **Dewy Glass Skin Base:** Heavy matte foundation is replaced by luminous, skin-like radiant finishes.
    - **Soft Romantic Rose Tones:** Muted rose, warm copper, and champagne shimmer on eyelids create soft captivating eyes.
    - **Statement Lip Contour:** Velvet matte lips paired with glossy centers ensure long-lasting color that photos effortlessly.`
  }
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section className="section-padding" id="blogs" style={{ background: '#090c0e' }}>
      <div className="container">
        <div className="section-title">
          <h2>LATEST <span className="accent-text">BEAUTY BLOGS</span></h2>
          <p style={{ color: '#888', marginTop: '10px' }}>Expert advice, hair care secrets, and beauty trends from our senior stylists.</p>
        </div>

        <div className="services-grid">
          {BLOGS_DATA.map((blog) => (
            <div className="blog-card" key={blog.id} style={{
              background: 'var(--bg-card)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              transition: 'var(--transition)'
            }}>
              <div>
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{
                    position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(11, 14, 17, 0.85)',
                    color: 'var(--primary)', padding: '4px 12px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: '600'
                  }}>
                    {blog.readTime}
                  </span>
                </div>
                <div style={{ padding: '25px 22px' }}>
                  <p style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '600', marginBottom: '8px' }}>
                    {blog.date} • {blog.author}
                  </p>
                  <h3 style={{ color: '#fff', marginBottom: '12px', fontSize: '1.2rem', lineHeight: '1.4' }}>{blog.title}</h3>
                  <p style={{ color: '#aaa', fontSize: '0.88rem', marginBottom: '20px', lineHeight: '1.6' }}>{blog.excerpt}</p>
                </div>
              </div>

              <div style={{ padding: '0 22px 22px' }}>
                <button
                  onClick={() => setSelectedBlog(blog)}
                  style={{
                    color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem',
                    borderBottom: '2px solid var(--primary)', paddingBottom: '3px', background: 'none'
                  }}
                >
                  READ ARTICLE <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Article Reader Modal */}
      {selectedBlog && (
        <div className="modal-overlay" onClick={() => setSelectedBlog(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '750px' }}>
            <button className="modal-close" onClick={() => setSelectedBlog(null)}>
              <i className="fas fa-times"></i>
            </button>

            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }}
            />

            <span style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600' }}>
              {selectedBlog.date} • By {selectedBlog.author}
            </span>
            <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '10px 0 20px', lineHeight: '1.3' }}>
              {selectedBlog.title}
            </h2>

            <div style={{ color: '#ddd', fontSize: '0.95rem', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
              {selectedBlog.content}
            </div>

            <div style={{ marginTop: '30px', textAlign: 'right' }}>
              <button className="btn-lavish" onClick={() => setSelectedBlog(null)}>
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blogs;
