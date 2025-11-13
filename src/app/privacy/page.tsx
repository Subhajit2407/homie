import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Shield, Lock, Eye, Database } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-beige to-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange/10">
                <Shield className="h-8 w-8 text-orange" />
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: March 15, 2024
            </p>
          </div>

          {/* Privacy Principles */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <Card className="border-2 border-border/40 bg-white p-6 text-center shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                  <Lock className="h-6 w-6 text-orange" />
                </div>
              </div>
              <h3 className="mb-2 font-bold text-foreground">Secure</h3>
              <p className="text-sm text-muted-foreground">Your data is encrypted and protected</p>
            </Card>
            
            <Card className="border-2 border-border/40 bg-white p-6 text-center shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                  <Eye className="h-6 w-6 text-orange" />
                </div>
              </div>
              <h3 className="mb-2 font-bold text-foreground">Transparent</h3>
              <p className="text-sm text-muted-foreground">Clear about data collection</p>
            </Card>
            
            <Card className="border-2 border-border/40 bg-white p-6 text-center shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10">
                  <Database className="h-6 w-6 text-orange" />
                </div>
              </div>
              <h3 className="mb-2 font-bold text-foreground">Controlled</h3>
              <p className="text-sm text-muted-foreground">You control your information</p>
            </Card>
          </div>

          <Card className="border-2 border-border/40 bg-white p-8 shadow-lg md:p-12">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">1. Information We Collect</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Personal information (name, email address, phone number)</li>
                  <li>Account credentials and profile information</li>
                  <li>Property listing details and photographs</li>
                  <li>Payment and billing information</li>
                  <li>Communications with us and other users</li>
                  <li>Search queries and preferences</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  We use the information we collect to:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Verify identity and conduct background checks</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Personalize and improve your experience</li>
                  <li>Detect and prevent fraud and abuse</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">3. Information Sharing</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  We may share your information with:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li><strong>Other users:</strong> Information necessary to facilitate transactions</li>
                  <li><strong>Service providers:</strong> Third parties who perform services on our behalf</li>
                  <li><strong>Legal requirements:</strong> When required by law or to protect rights</li>
                  <li><strong>Business transfers:</strong> In connection with mergers or acquisitions</li>
                </ul>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">4. Data Security</h2>
                <p className="leading-relaxed text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">5. Data Retention</h2>
                <p className="leading-relaxed text-muted-foreground">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">6. Your Rights and Choices</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  You have the right to:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to processing of your information</li>
                  <li>Request a copy of your data</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">7. Cookies and Tracking</h2>
                <p className="leading-relaxed text-muted-foreground">
                  We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">8. Children's Privacy</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Our services are not intended for users under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">9. International Data Transfers</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">10. Changes to Privacy Policy</h2>
                <p className="leading-relaxed text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <div className="mt-12 rounded-2xl bg-orange/10 p-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 flex-shrink-0 text-orange" />
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">Contact Us About Privacy</h3>
                    <p className="mb-2 text-muted-foreground">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <p className="text-muted-foreground">
                      Email:{" "}
                      <a href="mailto:privacy@homie.in" className="font-semibold text-orange hover:underline">
                        privacy@homie.in
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      Address: Koramangala, Bengaluru 560034, Karnataka, India
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
