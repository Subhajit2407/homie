import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { FileText, Shield, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-beige to-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange/10">
                <FileText className="h-8 w-8 text-orange" />
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: March 15, 2024
            </p>
          </div>

          <Card className="border-2 border-border/40 bg-white p-8 shadow-lg md:p-12">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                <p className="leading-relaxed text-muted-foreground">
                  By accessing and using Homie's platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">2. Use of Service</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Homie provides a platform connecting property owners and tenants. Users agree to:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of their account credentials</li>
                  <li>Not use the service for any illegal or unauthorized purpose</li>
                  <li>Comply with all applicable local, state, and national laws</li>
                  <li>Not impersonate another person or entity</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">3. Property Listings</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Property owners and agents agree to:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Provide accurate property descriptions and photographs</li>
                  <li>Disclose all relevant property information and restrictions</li>
                  <li>Maintain their listings with current availability and pricing</li>
                  <li>Respond promptly to inquiries from potential tenants</li>
                  <li>Complete verification processes as required</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">4. Booking and Payments</h2>
                <p className="leading-relaxed text-muted-foreground">
                  All bookings and payments are subject to the terms agreed upon between the property owner and tenant. Homie acts as a facilitator and is not party to rental agreements. Users are responsible for understanding and complying with payment terms, cancellation policies, and deposit requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">5. Verification and Safety</h2>
                <p className="leading-relaxed text-muted-foreground">
                  While Homie implements verification processes for properties and users, we cannot guarantee the accuracy of all information or the conduct of users. Users are encouraged to conduct their own due diligence and verify information independently before entering into any agreements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Homie shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service. Our total liability shall not exceed the amount paid by you to Homie in the six months preceding the claim.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">7. Intellectual Property</h2>
                <p className="leading-relaxed text-muted-foreground">
                  All content on the Homie platform, including text, graphics, logos, images, and software, is the property of Homie or its content suppliers and is protected by copyright and intellectual property laws. Users may not reproduce, distribute, or create derivative works without explicit permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">8. Termination</h2>
                <p className="leading-relaxed text-muted-foreground">
                  We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the service will cease immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">9. Governing Law</h2>
                <p className="leading-relaxed text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">10. Changes to Terms</h2>
                <p className="leading-relaxed text-muted-foreground">
                  We reserve the right to modify these Terms at any time. We will notify users of any changes by posting the new Terms on this page and updating the "Last updated" date. Continued use of the service after changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <div className="mt-12 rounded-2xl bg-orange/10 p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 flex-shrink-0 text-orange" />
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">Questions about our Terms?</h3>
                    <p className="text-muted-foreground">
                      If you have any questions about these Terms and Conditions, please contact us at{" "}
                      <a href="mailto:legal@homie.in" className="font-semibold text-orange hover:underline">
                        legal@homie.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
