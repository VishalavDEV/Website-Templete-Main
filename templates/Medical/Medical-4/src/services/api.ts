import { siteSettings } from '../data/siteData';
import { departments } from '../data/departments';
import { services } from '../data/services';
import { doctors } from '../data/doctors';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';
import { gallery } from '../data/gallery';
import { Department, Service, Doctor, Testimonial, FAQ, GalleryItem, SiteSettings } from '../types';

export async function getSiteSettings(): Promise<SiteSettings> {
  return Promise.resolve(siteSettings);
}

export async function getNavigation() {
  return Promise.resolve({
    mainMenu: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Departments", path: "/departments" },
      { name: "Services", path: "/services" },
      { name: "Doctors", path: "/doctors" },
      { name: "Contact", path: "/contact" }
    ],
    morePages: [
      { name: "Department Details", path: "/departments/cardiology" },
      { name: "Service Details", path: "/services/emergency-care" },
      { name: "Appointment", path: "/appointment" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "Frequently Asked Questions", path: "/faq" },
      { name: "Gallery", path: "/gallery" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "404 Page", path: "/non-existent-page" }
    ]
  });
}

export async function getDepartments(): Promise<Department[]> {
  await new Promise(resolve => setTimeout(resolve, 350));
  return [...departments];
}

export async function getDepartment(slug: string): Promise<Department | undefined> {
  await new Promise(resolve => setTimeout(resolve, 300));
  const dept = departments.find(d => d.slug === slug);
  return dept;
}

export async function getServices(): Promise<Service[]> {
  await new Promise(resolve => setTimeout(resolve, 350));
  return [...services];
}

export async function getService(slug: string): Promise<Service | undefined> {
  await new Promise(resolve => setTimeout(resolve, 300));
  const srv = services.find(s => s.slug === slug);
  return srv;
}

export async function getDoctors(): Promise<Doctor[]> {
  await new Promise(resolve => setTimeout(resolve, 350));
  return [...doctors];
}

export async function getDoctor(slug: string): Promise<Doctor | undefined> {
  await new Promise(resolve => setTimeout(resolve, 300));
  const doc = doctors.find(d => d.slug === slug);
  return doc;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return Promise.resolve(testimonials);
}

export async function getFAQs(): Promise<FAQ[]> {
  return Promise.resolve(faqs);
}

export async function getGallery(): Promise<GalleryItem[]> {
  return Promise.resolve(gallery);
}

export async function submitAppointment(data: {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  doctor: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
  message?: string;
}): Promise<{ success: boolean; message: string; appointmentId?: string }> {
  // Simulate API delay and success
  await new Promise(resolve => setTimeout(resolve, 1000));
  const appointmentId = "APT-" + Math.floor(100000 + Math.random() * 900000);
  console.log("Appointment submitted:", data);
  return {
    success: true,
    message: `Appointment successfully requested! Reference ID: ${appointmentId}`,
    appointmentId
  };
}

export async function submitContact(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; message: string }> {
  // Simulate API delay and success
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Contact message submitted:", data);
  return {
    success: true,
    message: "Your message has been sent successfully. Our team will contact you shortly."
  };
}
