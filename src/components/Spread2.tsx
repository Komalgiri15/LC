
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

const flipIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.1 }
};

export default function Spread2() {
  return (
    <div className="brochure-container">
      {/* COLUMN 4 (Left - Page 4) */}
      <motion.div 
        className="col"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 variants={flipIn} className="title-dark font-heading" style={{ fontSize: '1.8rem' }}>WHO IS<br/>IT FOR?</motion.h2>
        <motion.p variants={flipIn} className="subtitle-dark font-heading" style={{ fontSize: '0.85rem' }}>THE FIRST CLASSROOM FOR THOSE WHO SHAPE HEALTH.</motion.p>
        
        <div style={{ marginTop: '30px' }}>
          <motion.p variants={flipIn} className="section-label">For those who care for people.</motion.p>
          <motion.ul variants={flipIn} className="role-list">
            <li>Doctors & Clinicians</li>
            <li>Healthcare Professionals</li>
            <li>Nutritionists & Health Coaches</li>
            <li>Practitioners & Researchers</li>
          </motion.ul>

          <motion.p variants={flipIn} className="section-label">For those who shape minds and environments.</motion.p>
          <motion.ul variants={flipIn} className="role-list">
            <li>Educators</li>
            <li>Corporate Leaders & Organizations</li>
          </motion.ul>

          <motion.p variants={flipIn} className="section-label">For those who shape families and communities.</motion.p>
          <motion.ul variants={flipIn} className="role-list">
            <li>Parents & Caregivers</li>
            <li>Individuals with Lived Experience</li>
            <li>Lifelong Learners</li>
          </motion.ul>
        </div>

        <motion.p variants={flipIn} className="text-body" style={{ marginTop: '10px', fontStyle: 'italic', color: 'var(--dark-grey)' }}>
          And for anyone who wants to better understand their own health, and become a changemaker in their family, workplace and community.
        </motion.p>
      </motion.div>

      {/* COLUMN 5 (Middle - Page 5 - Black) */}
      <div className="col col-black" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', overflow: 'hidden', position: 'relative' }}>
        <motion.img 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          src="/middle-img.png" 
          alt="Abstract Lines" 
          className="img-middle-center" 
          style={{ opacity: 0.3 }}
        />
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="shape-circle-outline"
          style={{ opacity: 0.2 }}
        ></motion.div>

        {/* Dark overlay to ensure text legibility */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1 }}></div>
        
        {/* Added position relative to ensure zIndex works */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          style={{ zIndex: 2, position: 'relative', padding: '20px' }}
        >
          <motion.h2 variants={flipIn} className="title-huge font-heading" style={{ color: 'var(--white)', fontSize: '4rem', marginBottom: '40px', textShadow: '0px 4px 20px rgba(0,0,0,0.8)' }}>THIS IS<br/>WHERE<br/>IT BEGINS.</motion.h2>
          <motion.div variants={flipIn} className="divider-line" style={{ backgroundColor: 'var(--white)', opacity: 0.5, width: '40px', margin: '0 auto 40px auto' }}></motion.div>
          <motion.p variants={flipIn} className="subtitle-huge font-heading" style={{ color: 'var(--white)', fontSize: '1.2rem', letterSpacing: '4px', textShadow: '0px 2px 10px rgba(0,0,0,0.8)' }}>
            COME CURIOUS.<br/>LEAVE CONNECTED.
          </motion.p>
        </motion.div>
      </div>

      {/* COLUMN 6 (Right - Page 6) */}
      <motion.div 
        className="col"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={flipIn} className="icon-circle" style={{ position: 'relative', top: '0', right: '0', marginBottom: '20px' }}>
          <User size={32} />
        </motion.div>
        <motion.h2 variants={flipIn} className="title-dark font-heading" style={{ fontSize: '1.5rem', marginBottom: '5px' }}>LUKE COUTINHO</motion.h2>
        <motion.p variants={flipIn} className="subtitle-dark font-heading" style={{ fontSize: '0.8rem', marginBottom: '30px', lineHeight: '1.5' }}>
          Founder | Integrative, Foundational Medicine & Lifestyle Expert | Wellness Champion, Fit India Movement | Bestselling Author
        </motion.p>
        
        <motion.p variants={flipIn} className="text-body">
          <strong>The Person Behind the Framework</strong><br/><br/>
          Foundational Medicine was built on a simple idea: Every symptom is part of a larger story.
        </motion.p>
        <motion.p variants={flipIn} className="text-body">
          Long before it had a name, his practice with clients followed the same instinct, tracing a health issue back far enough, and it is rarely sitting where it hurts.
        </motion.p>
        
        <motion.div variants={flipIn} style={{ backgroundColor: '#f5f5f5', padding: '15px', borderLeft: '4px solid var(--black)', margin: '20px 0' }}>
          <p className="text-body" style={{ marginBottom: '10px' }}><em>A sleep problem is often a nervous system problem.</em></p>
          <p className="text-body" style={{ marginBottom: '0' }}><em>A metabolic issue is often a rhythm issue.</em></p>
        </motion.div>

        <motion.p variants={flipIn} className="text-body">
          The body doesn't file complaints by department. It responds as one system, always.
        </motion.p>
        
        <motion.p variants={flipIn} className="text-body" style={{ fontWeight: 600 }}>
          That instinct, connect before you treat, is what our Find Your Rhythm - Level 1 Foundational Medicine Certification is built to teach.
        </motion.p>
      </motion.div>
    </div>
  );
}
