/* PulseCare Seed Database & Mock State Store */

const INITIAL_MOCK_DATA = {
  doctors: [
    {
      id: "doc-1",
      name: "Dr. Priya Sharma",
      title: "Senior Consultant Cardiologist",
      specialty: "Cardiology",
      experience: 14,
      rating: 4.9,
      reviewsCount: 142,
      fee: 80,
      location: "Chennai Main Hospital",
      gender: "Female",
      languages: ["English", "Tamil", "Hindi"],
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
      about: "Dr. Priya Sharma is a renowned Cardiologist with over 14 years of clinical excellence in non-invasive cardiology, heart failure management, and preventive cardiovascular care.",
      education: ["MD - General Medicine, Madras Medical College", "DM - Cardiology, AIIMS New Delhi"],
      hospital: "PulseCare Heart Institute, Nungambakkam, Chennai",
      todaySlots: ["10:00 AM", "10:30 AM", "11:30 AM", "04:00 PM", "04:30 PM"],
      tomorrowSlots: ["09:00 AM", "09:30 AM", "10:00 AM", "02:00 PM", "03:00 PM"]
    },
    {
      id: "doc-2",
      name: "Dr. Rajesh Kumar",
      title: "Senior Neurosurgeon",
      specialty: "Neurology",
      experience: 18,
      rating: 4.8,
      reviewsCount: 98,
      fee: 100,
      location: "Bengaluru Healthcare Hub",
      gender: "Male",
      languages: ["English", "Kannada", "Hindi"],
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
      about: "Specialized in stroke intervention, epilepsy care, and complex spine surgeries with advanced micro-neurosurgical techniques.",
      education: ["MBBS, NIMHANS Bengaluru", "MCh - Neurosurgery"],
      hospital: "PulseCare Neuro Center, Indiranagar, Bengaluru",
      todaySlots: ["09:30 AM", "11:00 AM", "03:30 PM", "05:00 PM"],
      tomorrowSlots: ["10:00 AM", "11:30 AM", "02:30 PM", "04:00 PM"]
    },
    {
      id: "doc-3",
      name: "Dr. Ananya Reddy",
      title: "Lead Orthopedic Surgeon",
      specialty: "Orthopedics",
      experience: 10,
      rating: 4.9,
      reviewsCount: 115,
      fee: 75,
      location: "Hyderabad Medical Center",
      gender: "Female",
      languages: ["English", "Telugu", "Hindi"],
      avatar: "https://images.unsplash.com/photo-1594824813566-88855ce78961?auto=format&fit=crop&w=400&q=80",
      about: "Expert in joint replacement surgeries, sports injury rehabilitation, and arthroscopic knee and shoulder repairs.",
      education: ["MS - Orthopedics, Osmania University", "Fellowship in Joint Replacement (UK)"],
      hospital: "PulseCare Bone & Joint Clinic, Jubilee Hills, Hyderabad",
      todaySlots: ["10:30 AM", "12:00 PM", "03:00 PM"],
      tomorrowSlots: ["09:00 AM", "10:30 AM", "01:30 PM", "03:30 PM"]
    },
    {
      id: "doc-4",
      name: "Dr. Vikram Sethi",
      title: "Consultant Pediatrician",
      specialty: "Pediatrics",
      experience: 12,
      rating: 4.7,
      reviewsCount: 84,
      fee: 60,
      location: "Chennai Main Hospital",
      gender: "Male",
      languages: ["English", "Tamil", "Hindi"],
      avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
      about: "Compassionate child healthcare specialist focusing on pediatric nutrition, developmental milestones, and immunization schedules.",
      education: ["MD - Pediatrics, CMC Vellore"],
      hospital: "PulseCare Children's Pavilion, Adyar, Chennai",
      todaySlots: ["09:00 AM", "10:00 AM", "11:00 AM", "04:00 PM"],
      tomorrowSlots: ["09:30 AM", "10:30 AM", "02:00 PM"]
    },
    {
      id: "doc-5",
      name: "Dr. Kavita Nair",
      title: "Dermatology & Cosmetology Specialist",
      specialty: "Dermatology",
      experience: 9,
      rating: 4.9,
      reviewsCount: 160,
      fee: 70,
      location: "Bengaluru Healthcare Hub",
      gender: "Female",
      languages: ["English", "Malayalam", "Kannada"],
      avatar: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=400&q=80",
      about: "Specialized in medical dermatology, laser skin therapies, acne scar revision, and anti-aging treatments.",
      education: ["MD - Dermatology, Manipal University"],
      hospital: "PulseCare Skin Care Institute, Koramangala, Bengaluru",
      todaySlots: ["11:00 AM", "01:00 PM", "05:00 PM"],
      tomorrowSlots: ["10:00 AM", "12:00 PM", "04:00 PM"]
    }
  ],

  specialties: [
    {
      id: "spec-cardiology",
      name: "Cardiology",
      icon: "fa-heart-pulse",
      emoji: "❤️",
      description: "Comprehensive care for heart disease, arrhythmias, hypertension, and preventive vascular wellness.",
      treatments: ["Echocardiogram", "Angioplasty Consultation", "Holter Monitoring", "Cardiac Rehab"],
      commonConditions: ["Coronary Artery Disease", "Heart Failure", "High Blood Pressure", "Palpitations"]
    },
    {
      id: "spec-neurology",
      name: "Neurology",
      icon: "fa-brain",
      emoji: "🧠",
      description: "Advanced diagnostic & therapeutic care for disorders of the brain, spinal cord, and nervous system.",
      treatments: ["EEG Analysis", "Stroke Rehabilitation", "Migraine Management", "Nerve Conduction"],
      commonConditions: ["Epilepsy", "Parkinson's Disease", "Severe Migraine", "Neuropathy"]
    },
    {
      id: "spec-orthopedics",
      name: "Orthopedics",
      icon: "fa-bone",
      emoji: "🦴",
      description: "Specialized surgical and non-surgical solutions for bone, joint, ligament, and muscle disorders.",
      treatments: ["Knee Replacement", "Arthroscopy", "Spine Care", "Fracture Management"],
      commonConditions: ["Osteoarthritis", "ACL Tear", "Herniated Disc", "Rheumatoid Arthritis"]
    },
    {
      id: "spec-pediatrics",
      name: "Pediatrics",
      icon: "fa-baby",
      emoji: "👶",
      description: "Dedicated medical care for infants, children, and adolescents to ensure healthy growth.",
      treatments: ["Vaccination Schedules", "Developmental Screening", "Pediatric Asthma Care"],
      commonConditions: ["Childhood Allergies", "Recurrent Fevers", "Growth Delays", "Infections"]
    },
    {
      id: "spec-dermatology",
      name: "Dermatology",
      icon: "fa-allergies",
      emoji: "🧴",
      description: "Expert treatment for skin conditions, hair fall disorders, nail diseases, and cosmetic procedures.",
      treatments: ["Laser Therapy", "Chemical Peels", "Skin Biopsy", "Acne Extraction"],
      commonConditions: ["Eczema", "Psoriasis", "Acne Vulgaris", "Alopecia"]
    }
  ],

  appointments: [
    {
      id: "apt-101",
      doctorId: "doc-1",
      doctorName: "Dr. Priya Sharma",
      specialty: "Cardiology",
      date: "Today",
      time: "10:30 AM",
      type: "In-Person",
      patientName: "Madhav Narayan",
      status: "Upcoming",
      fee: 80,
      hospital: "PulseCare Heart Institute, Chennai"
    },
    {
      id: "apt-100",
      doctorId: "doc-3",
      doctorName: "Dr. Ananya Reddy",
      specialty: "Orthopedics",
      date: "10 Aug 2026",
      time: "02:00 PM",
      type: "Video Consultation",
      patientName: "Madhav Narayan",
      status: "Completed",
      fee: 75,
      hospital: "PulseCare Bone & Joint Clinic"
    }
  ],

  healthVault: {
    reports: [
      {
        id: "rep-1",
        title: "Comprehensive Cardiac Lipid Profile",
        category: "Blood Test",
        date: "18 Aug 2026",
        doctor: "Dr. Priya Sharma",
        status: "Normal",
        fileSize: "1.2 MB",
        downloadUrl: "#"
      },
      {
        id: "rep-2",
        title: "Right Knee Knee MRI Scan",
        category: "Radiology",
        date: "10 Aug 2026",
        doctor: "Dr. Ananya Reddy",
        status: "Reviewed",
        fileSize: "4.8 MB",
        downloadUrl: "#"
      }
    ],
    prescriptions: [
      {
        id: "rx-101",
        date: "10 Aug 2026",
        doctorName: "Dr. Ananya Reddy",
        diagnosis: "Mild Right Knee Osteoarthritis & Quadriceps Strain",
        medicines: [
          { name: "Tab. Glucosamine 500mg", dosage: "1 tab daily after breakfast", duration: "30 Days" },
          { name: "Tab. Paracetamol 650mg", dosage: "1 tab as needed for pain", duration: "5 Days" },
          { name: "Volini Gel", dosage: "Topical application twice daily", duration: "14 Days" }
        ],
        instructions: "Avoid high-impact running for 2 weeks. Begin gentle physical therapy."
      }
    ],
    timeline: [
      { date: "18 Aug 2026", title: "Blood Test Completed", desc: "Comprehensive Lipid Profile report released with Normal parameters.", icon: "fa-vial", category: "Lab Report" },
      { date: "10 Aug 2026", title: "Cardiology Consultation", desc: "Routine annual checkup with Dr. Priya Sharma. BP 120/80 mmHg.", icon: "fa-user-md", category: "Consultation" },
      { date: "25 Jul 2026", title: "Prescription Updated", desc: "Dr. Ananya Reddy prescribed Glucosamine and physiotherapy exercise plan.", icon: "fa-prescription", category: "Prescription" },
      { date: "12 Jul 2026", title: "Joined PulseCare Health Vault", desc: "Patient account established with digitized health records.", icon: "fa-shield-heart", category: "System" }
    ]
  },

  articles: [
    {
      id: "art-1",
      title: "10 Simple Daily Habits for a Heart-Healthy 2026",
      category: "Heart Care",
      readTime: "4 min read",
      author: "Dr. Priya Sharma",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
      snippet: "Discover how moderate aerobic exercise, reduced sodium intake, and mindfulness can reduce cardiac risk factors by up to 40%."
    },
    {
      id: "art-2",
      title: "Understanding Childhood Immunity & Seasonal Flu",
      category: "Children's Health",
      readTime: "5 min read",
      author: "Dr. Vikram Sethi",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      snippet: "Key signs parents should watch for during seasonal weather shifts and how to strengthen young immune systems."
    },
    {
      id: "art-3",
      title: "Ergonomics for Remote Workers: Protecting Your Spine",
      category: "Fitness & Posture",
      readTime: "6 min read",
      author: "Dr. Ananya Reddy",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
      snippet: "Practical chair height adjustments, lumbar support tips, and 2-minute desk stretches to prevent chronic lower back pain."
    }
  ],

  adminStats: {
    totalPatients: "14,892",
    totalDoctors: "64",
    totalAppointments: "1,248",
    monthlyRevenue: "$184,500",
    chartData: [
      { month: "Jan", count: 85 },
      { month: "Feb", count: 110 },
      { month: "Mar", count: 140 },
      { month: "Apr", count: 125 },
      { month: "May", count: 175 },
      { month: "Jun", count: 210 },
      { month: "Jul", count: 245 },
      { month: "Aug", count: 290 }
    ]
  }
};
