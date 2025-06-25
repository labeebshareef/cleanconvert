import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, AlertTriangle, Shield, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - CleanConvert',
  description: 'CleanConvert terms of service. Understand your rights and responsibilities when using our browser-based image conversion tools.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl font-bold">
              Terms of Service
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using CleanConvert's image processing tools.
          </p>
        </div>

        <div className="space-y-8">
          {/* Important Notice */}
          <Card className="border-amber-200 bg-amber-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <AlertTriangle className="h-5 w-5" />
                Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-amber-700">
                By using CleanConvert, you agree to these terms of service. CleanConvert is provided "as is" 
                without warranties. All image processing occurs in your browser - we do not store or access your files.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  By accessing and using CleanConvert ("the Service"), you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by the above, please do 
                  not use this service.
                </p>
                <p>
                  These terms apply to all visitors, users, and others who access or use the service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  CleanConvert is a web-based image processing tool that allows users to:
                </p>
                <ul>
                  <li>Convert images between different formats (JPG, PNG, WebP, AVIF, etc.)</li>
                  <li>Resize and optimize images</li>
                  <li>Process multiple images in batches</li>
                  <li>Strip EXIF metadata from images</li>
                </ul>
                <p>
                  All processing is performed client-side in your web browser. No images are uploaded to our servers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>You are responsible for:</p>
                <ul>
                  <li>Ensuring you have the right to process any images you upload to the service</li>
                  <li>Not using the service for any illegal or unauthorized purpose</li>
                  <li>Not attempting to interfere with or disrupt the service</li>
                  <li>Complying with all applicable local, state, national, and international laws</li>
                </ul>
                <p>
                  You must not use CleanConvert to process:
                </p>
                <ul>
                  <li>Copyrighted images without proper authorization</li>
                  <li>Images containing illegal content</li>
                  <li>Images that violate privacy rights of others</li>
                  <li>Malicious files disguised as images</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Privacy and Data Processing</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  CleanConvert processes images entirely within your web browser. This means:
                </p>
                <ul>
                  <li>Your images are never uploaded to our servers</li>
                  <li>We do not store, access, or retain any of your image data</li>
                  <li>All processing happens locally on your device</li>
                  <li>You maintain full control and ownership of your images</li>
                </ul>
                <p>
                  For more details about our privacy practices, please see our{' '}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  The CleanConvert service, including its design, code, and functionality, is protected by 
                  copyright and other intellectual property laws.
                </p>
                <p>
                  You retain all rights to images you process using CleanConvert. We claim no ownership or rights 
                  to your content.
                </p>
                <p>
                  CleanConvert is open source software. You may view the source code and contribute to the project 
                  according to the terms of the applicable open source license.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Disclaimers and Limitations</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  <strong>Service Availability:</strong> CleanConvert is provided "as is" without any guarantees 
                  of availability, reliability, or performance. We may modify, suspend, or discontinue the service 
                  at any time without notice.
                </p>
                <p>
                  <strong>No Warranties:</strong> We make no warranties, express or implied, regarding the service, 
                  including but not limited to warranties of merchantability, fitness for a particular purpose, 
                  or non-infringement.
                </p>
                <p>
                  <strong>Quality of Results:</strong> While we strive to provide high-quality image processing, 
                  we cannot guarantee the quality or accuracy of processed images. Results may vary depending on 
                  input image quality, browser capabilities, and device performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  To the maximum extent permitted by law, CleanConvert shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul>
                  <li>Loss of data or images</li>
                  <li>Loss of profits or business opportunities</li>
                  <li>Service interruptions or downtime</li>
                  <li>Damages resulting from use or inability to use the service</li>
                </ul>
                <p>
                  Our total liability for any claims related to the service shall not exceed the amount you paid 
                  to use the service (which is zero, as CleanConvert is free).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  CleanConvert may use third-party services for analytics and advertising:
                </p>
                <ul>
                  <li><strong>Google Analytics:</strong> For anonymous usage analytics</li>
                  <li><strong>Google AdSense:</strong> For displaying non-intrusive advertisements</li>
                  <li><strong>Vercel:</strong> For hosting and content delivery</li>
                </ul>
                <p>
                  These third-party services have their own terms of service and privacy policies. 
                  We are not responsible for their practices or policies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Modifications to Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately 
                  upon posting to this page. Your continued use of CleanConvert after any changes constitutes 
                  acceptance of the new terms.
                </p>
                <p>
                  We encourage you to review these terms periodically for any updates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Termination</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  You may stop using CleanConvert at any time. We may terminate or suspend access to the service 
                  immediately, without prior notice, for any reason, including if you breach these terms.
                </p>
                <p>
                  Upon termination, your right to use the service will cease immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  These terms shall be governed by and construed in accordance with applicable international laws 
                  and regulations regarding web services and data processing.
                </p>
                <p>
                  Any disputes arising from these terms or your use of CleanConvert will be resolved through 
                  binding arbitration or in courts of competent jurisdiction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us through the project repository.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong>Last Updated:</strong> January 1, 2025
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Effective Date:</strong> January 1, 2025
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}