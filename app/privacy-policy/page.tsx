import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Lock, Eye, UserCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white pitchcraft-text">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="pitchcraft-container">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold pitchcraft-heading text-blue-600">PitchCraft</div>
            </Link>
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <ArrowLeft className="w-4 h-4" />
              <span>トップページに戻る</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="pitchcraft-container">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold pitchcraft-heading">プライバシーポリシー</h1>
            <p className="text-xl text-gray-600 pitchcraft-text-large">個人情報の取り扱いについて</p>
            <p className="text-sm text-gray-500">最終更新日：2024年1月1日</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="pitchcraft-container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="pitchcraft-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 pitchcraft-heading">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span>基本方針</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pitchcraft-text">
                  <p>
                    PitchCraft株式会社（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と考え、
                    個人情報の保護に関する法律、その他の関係法令等を遵守し、 お客様の個人情報を適切に取り扱います。
                  </p>
                </CardContent>
              </Card>

              <Card className="pitchcraft-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 pitchcraft-heading">
                    <UserCheck className="w-5 h-5 text-blue-600" />
                    <span>個人情報の収集について</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pitchcraft-text space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">収集する個人情報</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>お名前</li>
                      <li>会社名・組織名</li>
                      <li>部署名・役職名</li>
                      <li>メールアドレス</li>
                      <li>電話番号</li>
                      <li>住所</li>
                      <li>お問い合わせ内容</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">収集方法</h3>
                    <p className="text-gray-600">当社は、以下の方法により個人情報を収集いたします：</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 mt-2">
                      <li>ウェブサイトのお問い合わせフォーム</li>
                      <li>電話でのお問い合わせ</li>
                      <li>メールでのお問い合わせ</li>
                      <li>営業活動における名刺交換</li>
                      <li>セミナーやイベントでの受付</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="pitchcraft-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 pitchcraft-heading">
                    <Eye className="w-5 h-5 text-blue-600" />
                    <span>個人情報の利用目的</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pitchcraft-text">
                  <p className="mb-4">当社は、収集した個人情報を以下の目的で利用いたします：</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>お問い合わせへの回答・対応</li>
                    <li>サービスの提供・契約の履行</li>
                    <li>サービスに関する情報提供・ご案内</li>
                    <li>アフターサービス・サポートの提供</li>
                    <li>新サービス・キャンペーンのご案内</li>
                    <li>市場調査・アンケートの実施</li>
                    <li>統計データの作成（個人を特定できない形式）</li>
                    <li>その他、お客様との取引を適切かつ円滑に履行するため</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="pitchcraft-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 pitchcraft-heading">
                    <Lock className="w-5 h-5 text-blue-600" />
                    <span>個人情報の管理・保護</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pitchcraft-text space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">安全管理措置</h3>
                    <p className="text-gray-600">
                      当社は、個人情報の漏洩、滅失、毀損等を防止するため、 適切な安全管理措置を講じます。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">従業員の監督</h3>
                    <p className="text-gray-600">
                      当社は、従業員に対し、個人情報の適切な取り扱いに関する教育・指導を行い、
                      個人情報保護に関する規程を遵守させます。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">委託先の監督</h3>
                    <p className="text-gray-600">
                      個人情報の取り扱いを委託する場合は、委託先に対して適切な監督を行います。
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="pitchcraft-card">
                <CardHeader>
                  <CardTitle className="pitchcraft-heading">第三者への提供</CardTitle>
                </CardHeader>
                <CardContent className="pitchcraft-text">
                  <p className="mb-4">
                    当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>法令に基づく場合</li>
                    <li>人の生命、身体または財産の保護のために必要がある場合</li>
                    <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                    <li>国の機関等が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="pitchcraft-card">
                <CardHeader>
                  <CardTitle className="pitchcraft-heading">Cookieについて</CardTitle>
                </CardHeader>
                <CardContent className="pitchcraft-text space-y-4">
                  <p>
                    当社のウェブサイトでは、サービス向上のためCookieを使用する場合があります。
                    Cookieは、ウェブサイトがお客様のコンピュータに送信する小さなファイルです。
                  </p>
                  <div>
                    <h3 className="font-semibold mb-2">Cookieの利用目的</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>ウェブサイトの利用状況の分析</li>
                      <li>ユーザビリティの向上</li>
                      <li>広告配信の最適化</li>
                    </ul>
                  </div>
                  <p className="text-gray-600">
                    お客様はブラウザの設定によりCookieを無効にすることができますが、
                    その場合、ウェブサイトの一部機能がご利用いただけない場合があります。
                  </p>
                </CardContent>
              </Card>

              <Card className="pitchcraft-card">
                <CardHeader>
                  <CardTitle className="pitchcraft-heading">お客様の権利</CardTitle>
                </CardHeader>
                <CardContent className="pitchcraft-text">
                  <p className="mb-4">お客様は、ご自身の個人情報について、以下の権利を有します：</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>個人情報の開示請求</li>
                    <li>個人情報の訂正・追加・削除請求</li>
                    <li>個人情報の利用停止・消去請求</li>
                    <li>個人情報の第三者提供の停止請求</li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    これらの請求をされる場合は、下記お問い合わせ先までご連絡ください。
                    本人確認を行った上で、合理的な期間内に対応いたします。
                  </p>
                </CardContent>
              </Card>

              <Card className="pitchcraft-card">
                <CardHeader>
                  <CardTitle className="pitchcraft-heading">プライバシーポリシーの変更</CardTitle>
                </CardHeader>
                <CardContent className="pitchcraft-text">
                  <p>
                    当社は、法令の変更や事業内容の変更等に伴い、 本プライバシーポリシーを変更する場合があります。
                    変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。
                  </p>
                </CardContent>
              </Card>

              <Card className="pitchcraft-card">
                <CardHeader>
                  <CardTitle className="pitchcraft-heading">お問い合わせ先</CardTitle>
                </CardHeader>
                <CardContent className="pitchcraft-text">
                  <p className="mb-4">個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold">PitchCraft株式会社</p>
                    <p>個人情報保護責任者</p>
                    <p>〒160-0006 東京都新宿区中町19-6</p>
                    <p>電話：050-3184-3852</p>
                    <p>メール：cs@imejin.biz</p>
                    <p className="text-sm text-gray-600">受付時間：9:30〜18:00（土日祝除く）</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="pitchcraft-container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 pitchcraft-heading">
            ご質問・ご相談はお気軽に
          </h2>
          <p className="text-blue-100 mb-8 pitchcraft-text">
            個人情報の取り扱いやサービスについて、ご不明な点がございましたらお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#apply">
              <Button size="lg" variant="secondary" className="pitchcraft-button">
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <div className="pitchcraft-container">
          <div className="space-y-6">
            <div>
              <h6 className="text-lg font-semibold tracking-wider pitchcraft-heading">
                BtoB向け伴走型営業支援サービス
              </h6>
              <div className="flex items-center justify-center space-x-2 mt-4">
                <Image src="/placeholder.svg?height=40&width=120" alt="PitchCraftロゴ" width={120} height={40} />
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <div className="flex flex-wrap justify-center space-x-6 text-sm">
                <Link href="/operator-info" className="text-gray-400 hover:text-white">
                  運営者情報
                </Link>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                  プライバシーポリシー
                </Link>
                <Link href="/company" className="text-gray-400 hover:text-white">
                  PitchCraft会社概要
                </Link>
              </div>
            </div>

            <div className="text-sm text-gray-400">&copy; 2019 PitchCraft, Inc. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
