// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { Send, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// const ContactSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: "Message Sent!",
//       description: "We'll get back to you within 24 hours.",
//     });
//     setFormData({ name: '', email: '', company: '', message: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <section id="contact" className="py-24 relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 matrix-grid opacity-20" />
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial-neon opacity-20" />

//       <div className="container mx-auto px-6 relative z-10" ref={ref}>
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
//             Contact Us
//           </span>
//           <h2 className="section-title mb-4">
//             Let's Build
//             <span className="gradient-text block">Together</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Ready to transform your business? Get in touch and let's discuss 
//             how we can help you achieve your goals.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-5 gap-12">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="lg:col-span-2 space-y-8"
//           >
//             <div className="glass-card-glow p-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <MapPin className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-display font-semibold text-foreground mb-1">
//                     Headquarters
//                   </h3>
//                   <p className="text-muted-foreground text-sm">
//                     <br />
//                     {/* Tech District, Silicon Valley<br /> */}
//                     Jaffna
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="glass-card-glow p-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <Phone className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-display font-semibold text-foreground mb-1">
//                     Phone
//                   </h3>
//                   <p className="text-muted-foreground text-sm">
//                     +94 77 877 8299<br />
//                     Mon - Fri, 9am - 6pm PST
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="glass-card-glow p-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <Mail className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-display font-semibold text-foreground mb-1">
//                     Email
//                   </h3>
//                   <p className="text-muted-foreground text-sm">
//                     info4dmatrixx@gmail.com<br />
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="lg:col-span-3"
//           >
//             <form onSubmit={handleSubmit} className="glass-card-glow p-8">
//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-2">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
//                     placeholder="john@company.com"
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-foreground mb-2">
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
//                   placeholder="Your Company"
//                 />
//               </div>

//               <div className="mb-8">
//                 <label className="block text-sm font-medium text-foreground mb-2">
//                   Your Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
//                   placeholder="Tell us about your project..."
//                 />
//               </div>

//               <motion.button
//                 type="submit"
//                 className="btn-neon-filled w-full flex items-center justify-center gap-2"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 Send Message
//                 <Send size={18} />
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;




import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info4dmatrixx@gmail.com&su=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0ACompany:%20${encodeURIComponent(formData.company)}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}%0APhone:%20${encodeURIComponent(formData.phone)}`;

    window.open(gmailLink, "_blank");

    toast({
      title: "Message Ready!",
      description: "Your email draft is opened in Gmail.",
    });

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        phone: ''
      });
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/94778778299"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Logo"
            className="w-6 h-6"
          />
          <span className="text-sm font-medium">Chat with us</span>
        </a>
      </div>

      {/* Background */}
      <div className="absolute inset-0 matrix-grid opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial-neon opacity-20" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Contact Us
          </span>
          <h2 className="section-title mb-4">
            Let's Build
            <span className="gradient-text block">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Get in touch and let's discuss
            how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card-glow p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    Headquarters
                  </h3>
                  <p className="text-muted-foreground text-sm">Jaffna</p>
                </div>
              </div>
            </div>

            <div className="glass-card-glow p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    Phone
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    +94 77 877 8299<br />
                    Mon - Fri, 9am - 6pm
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card-glow p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    Email
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    info4dmatrixx@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card-glow p-8">

              {/* NAME + EMAIL */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* COMPANY */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>

              {/* PHONE */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+94"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border"
                />
              </div>

              {/* MESSAGE */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border resize-none outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn-neon-filled w-full flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={18} />
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
