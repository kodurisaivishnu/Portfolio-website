import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(`Error: ${result.message || "Failed to send email."}`);
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };
  

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
          <h3 className="text-2xl font-semibold text-indigo-600">
            Let's Connect
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            I'm open to new opportunities. Whether it's a question or a friendly
            "hi" — let's talk!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-indigo-500" />
              <a
                href="mailto:kodurisaivishnu@gmail.com"
                className="hover:text-indigo-600 transition-colors text-sm md:text-base">
                kodurisaivishnu@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-indigo-500" />
              <a
                href="https://linkedin.com/in/kodurisaivishnu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition-colors text-sm md:text-base">
                linkedin.com/in/kodurisaivishnu
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-indigo-500" />
              <a
                href="https://github.com/kodurisaivishnu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition-colors text-sm md:text-base">
                github.com/kodurisaivishnu
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
          <h3 className="text-xl font-semibold mb-2">Send a Message</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Fill out the form and I’ll respond shortly.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="px-3 py-2 border rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="px-3 py-2 border rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="px-3 py-2 border rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="px-3 py-2 border rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
