import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Building, Phone, Mail, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OperatorInfoPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold pitchcraft-heading">運営者情報</h1>
            <p className="text-xl text-gray-600 pitchcraft-text-large">サイト運営者に関する情報</p>
          </div>
        </div>
      </section>

      {/* Operator Information */}
      <section className="py-20">
        <div className="pitchcraft-container">
          <div className="max-w-4xl mx-auto">
            <Card className="pitchcraft-card mb-12">
              <CardHeader>
                <CardTitle className="pitchcraft-heading">サイト運営者情報</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-3">
                        <Building className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">運営会社</h3>
                          <p className="text-gray-600">PitchCraft株式会社</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">電話番号</h3>
                          <p className="text-gray-600">050-3184-3852</p>
                          <p className="text-sm text-gray-500">受付時間：9:30〜18:00（土日祝除く）</p>
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
                    <div className="space-y-6">
                      <div className="flex items-start space-x-3">
                        <Building className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">所在地</h3>
                          <p className="text-gray-600">
                            〒160-0006
                            <br />
                            東京都新宿区中町19-6
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Globe className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">ウェブサイト</h3>
                          <p className="text-gray-600">https://pitchcraft.co.jp</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="font-semibold mb-4 pitchcraft-heading">サイトの目的</h3>
                    <div className="space-y-4 pitchcraft-text">
                      <p>
                        本サイトは、PitchCraft株式会社が提供するBtoB向け営業支援サービスの紹介および
                        お客様からのお問い合わせ・お申込みを受け付けることを目的として運営しております。
                      </p>
                      <p>
                        サービスに関するご質問、お申込み、その他お困りのことがございましたら、
                        上記連絡先までお気軽にお問い合わせください。
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="font-semibold mb-4 pitchcraft-heading">免責事項</h3>
                    <div className="space-y-4 pitchcraft-text text-sm">
                      <p>
                        本サイトに掲載されている情報の正確性については万全を期しておりますが、
                        利用者が本サイトの情報を用いて行う一切の行為について、 当社は何ら責任を負うものではありません。
                      </p>
                      <p>
                        本サイトの内容は予告なく変更される場合があります。
                        また、本サイトの運営を中断または中止させていただく場合があります。
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="font-semibold mb-4 pitchcraft-heading">著作権について</h3>
                    <div className="space-y-4 pitchcraft-text text-sm">
                      <p>
                        本サイトに掲載されているコンテンツ（文章、画像、動画等）の著作権は、
                        PitchCraft株式会社または正当な権利者に帰属します。
                      </p>
                      <p>
                        これらのコンテンツについて、権利者の許可なく複製、転用、販売等の二次利用を行うことを禁じます。
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="pitchcraft-container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 pitchcraft-heading">お問い合わせはこちら</h2>
          <p className="text-blue-100 mb-8 pitchcraft-text">
            サービスに関するご質問やお申込みは、お気軽にご連絡ください。
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
