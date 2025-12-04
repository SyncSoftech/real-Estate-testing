"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    service: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    "Quantity Surveying & Commercial Management",
    "Variation, Claims & Dispute Support",
    "Tendering, Procurement & Estimating",
    "Contract Support (NEC, JCT, FIDIC & Bespoke)",
    "PMO, Planning & Project Controls",
    "Project Management",
    "Smart Commercial Systems & Power Platform Solutions",
    "Data Centre / EPCM Commercial Support",
    "On-Demand Commercial Firepower (QSs, Planners, FDs)",
    "General Enquiry",
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+44 07730748210",
      link: "tel:+44 07730748210",
    },
    {
      icon: Mail,
      label: "Email",
      value: " sales@ginjo.co.uk ",
      link: "mailto:sales@ginjo.co.uk ",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "100 Bishopsgate, London EC2N 4AG, UK",
      link: "#",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        service: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="bg-[#bac6c7] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-[#123e6a] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-[#123e6a] max-w-2xl">
            Have a question or project in mind? We'd love to hear from you. Contact our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.link}
                    className="group flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-[#f5f0ea] transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-[#08a3e0] rounded-full">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#123e6a] mb-1">
                        {info.label}
                      </h3>
                      <p className="text-[#123e6a] group-hover:text-[#08a3e0] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Office Hours */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-[#123e6a] mb-4">
                Office Hours (UK Time Zone)
              </h3>
              <div className="space-y-2 text-sm text-[#123e6a]">
                <p>
                  <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM
                </p>
                <p>
                  <span className="font-medium">Saturday:</span> 10:00 AM - 2:00 PM
                </p>
                <p>
                  <span className="font-medium">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <CheckCircle className="w-16 h-16 text-[#08a3e0] mb-4" />
                  <h3 className="text-2xl font-bold text-[#123e6a] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-[#123e6a] text-center max-w-md">
                    Your message has been sent successfully. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#123e6a] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#f9f7f4] border border-[#d4ccc4] rounded-lg text-[#123e6a] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#08a3e0] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#123e6a] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#f9f7f4] border border-[#d4ccc4] rounded-lg text-[#123e6a] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#08a3e0] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Company Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#123e6a] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#f9f7f4] border border-[#d4ccc4] rounded-lg text-[#123e6a] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#08a3e0] transition-all"
                        placeholder="+44 (0)20 XXXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#123e6a] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#f9f7f4] border border-[#d4ccc4] rounded-lg text-[#123e6a] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#08a3e0] transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-[#123e6a] mb-2">
                      Service of Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#f9f7f4] border border-[#d4ccc4] rounded-lg text-[#123e6a] focus:outline-none focus:ring-2 focus:ring-[#08a3e0] transition-all"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-[#123e6a] mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#f9f7f4] border border-[#d4ccc4] rounded-lg text-[#123e6a] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#08a3e0] transition-all"
                      placeholder="What is this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#123e6a] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-[#f9f7f4] border border-[#d4ccc4] rounded-lg text-[#123e6a] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#08a3e0] transition-all resize-none"
                      placeholder="Tell us more about your project or inquiry..."
                    ></textarea>
                  </div>

                  {/* Privacy Notice */}
                  <p className="text-xs text-[#666] text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-[#08a3e0] hover:underline">
                      Privacy Policy
                    </a>
                    . We'll only use your information to respond to your inquiry.
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#bac6c7] text-white font-semibold py-3 rounded-lg hover:bg-[#0a8bc4] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h3 className="text-2xl font-bold  mb-2">24/7</h3>
            <p className="text-[#123e6a]">
              We're available around the clock for urgent inquiries
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h3 className="text-2xl font-bold  mb-2">Global</h3>
            <p className="text-[#123e6a]">
              Offices in 62 countries ready to assist you
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h3 className="text-2xl font-bold  mb-2">Expert</h3>
            <p className="text-[#123e6a]">
              Over 22,000 professionals at your service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
