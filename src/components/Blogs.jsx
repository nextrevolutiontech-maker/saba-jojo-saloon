import React from 'react';
import blog1 from '../assets/blog-1.png';
import blog2 from '../assets/blog-2.png';

const blogs = [
  {
    id: 1,
    title: "5 Tips for Perfect Hair Care",
    date: "May 10, 2026",
    image: blog1,
    excerpt: "Learn how to maintain your hair's natural shine and strength with these simple expert tips from SJ stylists."
  },
  {
    id: 2,
    title: "Summer Skin Routine Essentials",
    date: "May 08, 2026",
    image: blog2,
    excerpt: "Discover the must-have products and routines to keep your skin hydrated and glowing all summer long."
  },
  {
    id: 3,
    title: "Bridal Makeup Trends 2026",
    date: "May 05, 2026",
    image: blog1,
    excerpt: "From minimalist looks to bold statements, explore the top bridal makeup trends of the season."
  }
];

const Blogs = () => {
  return (
    <section className="section-padding" id="blogs" style={{background: 'var(--bg-beige)'}}>
      <div className="container">
        <div className="section-title">
          <h2 style={{color: 'var(--bg-dark)'}}>LATEST <span className="accent-text">BLOGS</span></h2>
          <p style={{color: '#555', marginTop: '10px'}}>Stay updated with the latest beauty tips and trends.</p>
        </div>
        <div className="services-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id} style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              transition: 'var(--transition)'
            }}>
              <div style={{height: '250px', overflow: 'hidden'}}>
                <img src={blog.image} alt={blog.title} style={{width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s'}} className="blog-img" />
              </div>
              <div style={{padding: '30px'}}>
                <p style={{color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '600', marginBottom: '10px'}}>{blog.date}</p>
                <h3 style={{color: 'var(--bg-dark)', marginBottom: '15px', fontSize: '1.4rem'}}>{blog.title}</h3>
                <p style={{color: '#666', fontSize: '0.9rem', marginBottom: '25px'}}>{blog.excerpt}</p>
                <a href="#" style={{color: 'var(--bg-dark)', fontWeight: '700', fontSize: '0.9rem', borderBottom: '2px solid var(--primary)'}}>READ MORE</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
