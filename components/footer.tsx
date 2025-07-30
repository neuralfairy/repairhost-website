import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Repairhost Solutions</h3>
            <p className="text-gray-300 mb-4">
              CRM, Calibrated: From Setup to Scale. Transform your customer relationship systems with enterprise
              consulting.
            </p>
            <p className="text-gray-400 text-sm">Powered by Sales Intelligence Platform</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/solutions" className="hover:text-blue-400">
                  CRM Implementation
                </Link>
              </li>
              <li>
                <Link href="/crm-maturity" className="hover:text-blue-400">
                  Maturity Assessment
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-400">
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="https://salescentri.com/solutions/psa-suite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  PSA Suite
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/blog" className="hover:text-blue-400">
                  CRM Thought Lab
                </Link>
              </li>
              <li>
                <a
                  href="https://salescentri.com/resources/case-studies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/resources/whitepapers-ebooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  Whitepapers
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400">Get the latest CRM insights and updates.</p>
            </div>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/privacy" className="hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-400">
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <span>© 2024 Repairhost Solutions. All rights reserved.</span>
            <div className="flex space-x-2">
              <span className="text-xs bg-green-600 px-2 py-1 rounded">SOC 2</span>
              <span className="text-xs bg-blue-600 px-2 py-1 rounded">GDPR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
