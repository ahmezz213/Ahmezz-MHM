import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container max-w-4xl py-12 px-4 md:px-6">
        <Link href="/">
          <Button variant="ghost" className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white">
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </Link>

        <div className="flex items-center mb-8">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mr-2">
            AHM
          </h1>
          <h2 className="text-3xl font-bold text-white">| Privacy Policy</h2>
        </div>

        <div className="prose prose-invert max-w-none text-gray-300">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Your Privacy Matters to Us</h2>
          <p>
            At AHM, we're committed to protecting your privacy and ensuring your data is handled with the utmost care.
            This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our
            website or services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">What Information Do We Collect?</h2>
          <ul className="list-disc pl-6 my-4">
            <li>
              <strong>Personal Data:</strong> When you contact us or use our services, we may collect information such
              as your name, email address, phone number, and company details.
            </li>
            <li>
              <strong>Usage Data:</strong> We gather data on how you interact with our website, including IP addresses,
              browser types, and pages visited.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.
              You can manage your cookie preferences at any time.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">How Do We Use Your Information?</h2>
          <ul className="list-disc pl-6 my-4">
            <li>To provide and improve our services.</li>
            <li>To communicate with you about your inquiries or projects.</li>
            <li>To personalize your experience and deliver relevant content.</li>
            <li>To analyze trends and optimize our website performance.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">How Do We Protect Your Data?</h2>
          <p>
            We implement industry-standard security measures to protect your information from unauthorized access,
            alteration, or disclosure. Your data is stored securely and accessed only by authorized personnel.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 my-4">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of marketing communications.</li>
            <li>Request a copy of the data we hold about you.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We're not responsible for their privacy practices, so we
            encourage you to review their policies separately.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we'll
            notify you of significant updates.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Got Questions?</h2>
          <p>
            If you have any concerns about your privacy or how we handle your data, please contact us at
            ahmezz.mhm@gmail.com.
          </p>
        </div>
      </div>
    </div>
  )
}
