import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Server, Lock, Database, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - CleanConvert',
  description: 'CleanConvert privacy policy. Learn how we protect your data with 100% browser-based processing, no uploads, and no tracking.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl font-bold">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is our priority. Learn how CleanConvert protects your data with 100% browser-based processing.
          </p>
        </div>

        <div className="space-y-8">
          {/* Privacy Highlights */}
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Shield className="h-5 w-5" />
                Privacy Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Server className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-green-800">No Server Processing</h3>
                    <p className="text-sm text-green-700">
                      All image processing happens in your browser. Your files never leave your device.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Database className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-green-800">No Data Storage</h3>
                    <p className="text-sm text-green-700">
                      We don't store, cache, or retain any of your images or personal data.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-green-800">No Tracking</h3>
                    <p className="text-sm text-green-700">
                      We use anonymous analytics only to improve the service. No personal tracking.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-green-800">No Accounts Required</h3>
                    <p className="text-sm text-green-700">
                      Use all features without creating an account or providing personal information.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Policy */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How CleanConvert Works</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  CleanConvert is a client-side web application that processes images entirely within your web browser. 
                  This means that when you upload or drag images into CleanConvert, those images are processed locally 
                  on your device using JavaScript and WebAssembly technologies.
                </p>
                <p>
                  <strong>Your images never leave your device.</strong> They are not uploaded to our servers, 
                  stored in any database, or transmitted over the internet for processing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information We Don't Collect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Your images or any image content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Personal information (name, email, address, phone number)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>File names or metadata from your images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Login credentials or account information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Device-specific identifiers or fingerprinting data</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analytics and Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Google Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    We use Google Analytics to understand how users interact with CleanConvert. This helps us improve 
                    the service by understanding which features are most useful and identifying areas for improvement.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    The analytics data collected is anonymous and includes:
                  </p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>• Page views and session duration</li>
                    <li>• General geographic location (country/region level)</li>
                    <li>• Browser type and device category</li>
                    <li>• Which features are used most frequently</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    CleanConvert uses minimal cookies only for:
                  </p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>• Remembering your preferred settings (format, quality)</li>
                    <li>• Google Analytics (anonymous usage tracking)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    No cookies are used for tracking, advertising, or personal identification.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Google Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    We use Google Analytics with anonymized IP addresses and no personally identifiable information. 
                    You can opt out of Google Analytics by using browser extensions or adjusting your browser settings.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Google AdSense</h3>
                  <p className="text-sm text-muted-foreground">
                    We may display non-intrusive advertisements through Google AdSense to support the free service. 
                    These ads are contextual and do not use personal data from your image processing activities.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Content Delivery Network (CDN)</h3>
                  <p className="text-sm text-muted-foreground">
                    CleanConvert is hosted on Vercel's CDN for fast global access. Vercel may collect standard 
                    web server logs (IP addresses, user agents) but does not have access to your image data.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Since CleanConvert processes images entirely in your browser, your data security is primarily 
                  dependent on your device and browser security. We recommend:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Using an up-to-date web browser</li>
                  <li>• Ensuring your device has current security updates</li>
                  <li>• Using HTTPS (which CleanConvert enforces by default)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Since we don't collect personal data, there's no personal information to access, modify, or delete. 
                  However, you have the following choices:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Disable cookies in your browser settings</li>
                  <li>• Use ad blockers to prevent advertising cookies</li>
                  <li>• Opt out of Google Analytics using browser extensions</li>
                  <li>• Clear your browser's local storage to remove any saved preferences</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We may update this privacy policy from time to time to reflect changes in our practices or 
                  applicable laws. Any changes will be posted on this page with an updated effective date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you have questions about this privacy policy or CleanConvert's privacy practices, 
                  you can contact us through:
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Created by:</strong>{' '}
                    <a href="https://bolt.new" className="text-primary hover:underline">
                      Bolt.new
                    </a>
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