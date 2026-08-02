import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData,setFormData]=useState({name:"",email:"",subject:"",message:""});
  const [loading,setLoading]=useState(false);

  const handleChange=(e)=>setFormData({...formData,[e.target.name]:e.target.value});

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    try{
      await emailjs.send(
        "service_xq0x1yd",
        "template_c0k5kif",
        {
          name:formData.name,
          email:formData.email,
          subject:formData.subject,
          message:formData.message
        },
        "Nj5l0NuuAvakbjVL5"
      );
      alert("Message sent successfully!");
      setFormData({name:"",email:"",subject:"",message:""});
    }catch(err){
      console.error(err);
      alert("Failed to send message.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.08),transparent_60%)]"></div>
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <motion.form onSubmit={handleSubmit} className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full bg-black border border-yellow-500/20 rounded-xl p-4 text-white mb-5"/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full bg-black border border-yellow-500/20 rounded-xl p-4 text-white mb-5"/>
            <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full bg-black border border-yellow-500/20 rounded-xl p-4 text-white mb-5"/>
            <textarea rows="5" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full bg-black border border-yellow-500/20 rounded-xl p-4 text-white mb-6 resize-none"/>
            <button type="submit" disabled={loading} className="w-full bg-yellow-500 text-black font-semibold py-4 rounded-xl">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}