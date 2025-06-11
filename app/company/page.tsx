import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MapPin, Phone, Mail, Users, Calendar, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CompanyPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold pitchcraft-heading">会社概要</h1>
            <p className="text-xl text-gray-600 pitchcraft-text-large">PitchCraft株式会社について</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="pitchcraft-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold pitchcraft-heading mb-6">私たちについて</h2>
                <div className="space-y-4 pitchcraft-text">
                  <p>
                    PitchCraft株式会社は、BtoB企業の新規顧客開拓を支援する営業代行サービスを提供しています。
                    2015年の設立以来、多くの企業様の営業活動をサポートし、売上向上に貢献してまいりました。
                  </p>
                  <p>
                    私たちは「良い商品に、もっとチャンスを」をミッションに掲げ、
                    優れた商品・サービスを持ちながらも営業活動に課題を抱える企業様を支援しています。
                  </p>
                  <p>
                    独自のAI技術とプロフェッショナルなスタッフによる伴走型サポートで、
                    お客様の新規顧客開拓を成功に導きます。
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="PitchCraftオフィス"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Company Details */}
            <Card className="pitchcraft-card mb-12">
              <CardHeader>
                <CardTitle className="pitchcraft-heading">会社情報</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <Building className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">会社名</h3>
                        <p className="text-gray-600">PitchCraft株式会社</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">代表取締役</h3>
                        <p className="text-gray-600">松木友範</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">設立</h3>
                        <p className="text-gray-600">2015年7月</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">本社所在地</h3>
                        <p className="text-gray-600">
                          〒160-0006
                          <br />
                          東京都新宿区中町19-6
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">電話番号</h3>
                        <p className="text-gray-600">050-3184-3852</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">メールアドレス</h3>
                        <p className="text-gray-600">cs@imejin.biz</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Description */}
            <Card className="pitchcraft-card mb-12">
              <CardHeader>
                <CardTitle className="pitchcraft-heading">事業内容</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 pitchcraft-text">
                  <div>
                    <h3 className="font-semibold mb-2">BtoB営業代行サービス</h3>
                    <p className="text-gray-600">
                      企業のお問い合わせフォームを活用した新規顧客開拓支援、
                      テレアポ代行、手書き風手紙による営業活動代行
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">AIスマートターゲティング</h3>
                    <p className="text-gray-600">
                      独自のAI技術を活用した見込み顧客の分析・リスト作成、 企業活動データの収集・解析
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">営業戦略コンサルティング</h3>
                    <p className="text-gray-600">
                      専属チームによる月次戦略会議、セールスレター作成支援、 A/Bテスト実施・分析
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Major Clients */}
            <Card className="pitchcraft-card">
              <CardHeader>
                <CardTitle className="pitchcraft-heading">主要取引先</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 pitchcraft-text">
                  <ul className="space-y-2">
                    <li>• 株式会社オイシックス</li>
                    <li>• 日清食品ホールディングス株式会社</li>
                    <li>• 株式会社JTB</li>
                    <li>• 日揮株式会社</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• ソウルドアウト株式会社</li>
                    <li>• ディップ株式会社</li>
                    <li>• 株式会社アルバイトタイムス</li>
                    <li>• その他多数</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="pitchcraft-container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 pitchcraft-heading">
            お気軽にお問い合わせください
          </h2>
          <p className="text-blue-100 mb-8 pitchcraft-text">
            PitchCraftのサービスについて詳しく知りたい方は、お気軽にご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#apply">
              <Button size="lg" variant="secondary" className="pitchcraft-button">
                お申込み・資料請求
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 pitchcraft-button"
            >
              <Phone className="w-5 h-5 mr-2" />
              050-3184-3852
            </Button>
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
