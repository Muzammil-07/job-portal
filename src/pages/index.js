import React from "react";
import { useRouter } from "next/router";
import logo from '../../public/logo.png'
import Image from "next/image";
const LandingPage = () => {
  const router = useRouter();

  const navigateToJobs = () => {
    router.push("/dashboard");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold">
          <Image src={logo} height={400} width={400} className="object-contain w-[150px] sm:w-[200px]" />
          </div>
          <div>
            <button
              className="text-blue-600 font-semibold hover:underline"
              onClick={navigateToJobs}
            >
              View Jobs
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          Find Your Dream Job
        </h1>
        <p className="mt-4 text-gray-600">
          Explore thousands of job listings from top companies. Apply now and
          start your career journey with us.
        </p>
        <button
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
          onClick={navigateToJobs}
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1 text-center mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800">Wide Range of Jobs</h2>
            <p className="mt-4 text-gray-600">
              We offer a variety of jobs across different industries and cities.
            </p>
          </div>
          <div className="flex-1 text-center mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800">Easy Application</h2>
            <p className="mt-4 text-gray-600">
              Apply to jobs with just a few clicks using our easy-apply feature.
            </p>
          </div>
          <div className="flex-1 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Professional Support</h2>
            <p className="mt-4 text-gray-600">
              Get support from professionals to enhance your job search process.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Ready to Take the Next Step?</h2>
          <p className="mt-4 text-lg">
            Sign up today and start applying for your dream job!
          </p>
          <button
            className="mt-8 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100"
            onClick={navigateToJobs}
          >
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 JobFinder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
