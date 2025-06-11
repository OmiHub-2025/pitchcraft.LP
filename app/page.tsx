"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Phone, Mail, Users, Target, TrendingUp, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
// useEffectとuseRefをインポートに追加
import { useState, useTransition, useEffect } from "react"

// コンポーネント内の最初の部分にスクロールアニメーション機能を追加

export default function KaitakLandingPage() {
  const [isPending, startTransition] = useTransition()
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // スクロールアニメーション用のセットアップ
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    // アニメーション対象の要素を監視
    const animateElements = document.querySelectorAll(
      ".scroll-animate, .scroll-slide-left, .scroll-slide-right, .scroll-scale, .scroll-card",
    )
    animateElements.forEach((el) => observer.observe(el))

    // クリーンアップ
    return () => {
      animateElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  // 既存の関数は変更なし
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    startTransition(async () => {
      try {
        // フォーム送信のシミュレーション（実際のAPIエンドポイントに置き換えてください）
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // 成功時の処理
        setSubmitStatus("success")
        setFormData({
          company: "",
          name: "",
          email: "",
          phone: "",
          message: "",
        })

        // 3秒後にステータスをリセット
        setTimeout(() => setSubmitStatus("idle"), 3000)
      } catch (error) {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 3000)
      }
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const scrollToApply = () => {
    const applySection = document.getElementById("apply")
    if (applySection) {
      applySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white pitchcraft-text">
      {/* Header - アニメーションクラスを追加 */}
      <header className="pt-16 bg-gray-50">
        {/* Header Menu */}
        <nav className="bg-white shadow-sm border-b scroll-animate">
          <div className="pitchcraft-container">
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center">
                <div className="text-2xl font-bold pitchcraft-heading text-blue-600">PitchCraft</div>
              </div>

              <div className="hidden lg:flex items-center space-x-6">
                <Link href="#situation" className="text-sm text-gray-700 hover:text-blue-600 pitchcraft-text">
                  事例
                </Link>
                <Link href="#comparison" className="text-sm text-gray-700 hover:text-blue-600 pitchcraft-text">
                  他社との比較
                </Link>
                <Link href="#pricing" className="text-sm text-gray-700 hover:text-blue-600 pitchcraft-text">
                  料金
                </Link>
                <Link href="#flow" className="text-sm text-gray-700 hover:text-blue-600 pitchcraft-text">
                  ご利用の流れ
                </Link>
                <Link href="#faq" className="text-sm text-gray-700 hover:text-blue-600 pitchcraft-text">
                  FAQ
                </Link>
              </div>

              <div className="hidden lg:flex items-center space-x-3">
                <div className="text-center">
                  <div className="text-xs text-gray-600 pitchcraft-text">電話で申込み・質問</div>
                  <div className="font-bold text-lg pitchcraft-heading">090-9867-6524</div>
                </div>
                <Button
                  className="pitchcraft-button bg-blue-600 hover:bg-blue-700 px-6 py-2 text-sm"
                  onClick={scrollToApply}
                >
                  申込み
                </Button>
              </div>

              <button className="lg:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section - 新しい画像とテキストに更新 */}
        <div className="pitchcraft-container py-12">
          <div className="text-center space-y-6">
            <div className="relative scroll-scale">
              <Image
                src="/images/hero-business-team.jpg"
                alt="出来る営業をあなたの会社に"
                width={800}
                height={500}
                className="mx-auto rounded-lg shadow-lg"
                priority
              />
            </div>

            <div className="space-y-4 scroll-animate scroll-animate-delay-1">
              <h1 className="text-4xl lg:text-5xl font-bold pitchcraft-heading leading-tight">
                <span className="block">出来る営業を</span>
                <span className="block">あなたの会社に。</span>
              </h1>

              <div className="space-y-3 text-base pitchcraft-text">
                <p className="font-bold text-lg pitchcraft-text-large">営業代行の新しい形「PitchCraft」</p>
                <p className="pitchcraft-text">
                  PitchCraftはBtoB、BtoC全てに対応した
                  <br />
                  伴走型営業代行サービスです。
                </p>
                <p>
                  "良いモノを作っているのに
                  <br />
                  お客様に知ってもらえない"
                </p>
                <p>そんな問題を解決します。</p>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="pitchcraft-button pitchcraft-gradient-orange text-white px-10 py-3 text-base font-bold"
                  onClick={scrollToApply}
                >
                  申込み・資料請求はこちら
                </Button>

                <div className="bg-white p-4 rounded-lg shadow-lg pitchcraft-card max-w-md mx-auto">
                  <h3 className="font-bold text-sm mb-1 pitchcraft-heading">【電話申込み・資料請求】</h3>
                  <p className="text-xs text-gray-600 pitchcraft-text">9:00~22:00(土日祝含む)</p>
                  <div className="font-bold text-xl text-blue-600 pitchcraft-heading">090-9867-6524</div>
                </div>
              </div>
            </div>

            {/* 既存のPitchCraftならまるごとお任せセクションはそのまま保持 */}
            <div className="mt-12 text-center scroll-animate scroll-animate-delay-3">
              <h2 className="text-xl font-bold mb-6 pitchcraft-heading">PitchCraftならまるごとお任せ！</h2>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-xs font-medium pitchcraft-text">
                    専属チームが
                    <br />
                    毎月戦略提案
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-xs font-medium pitchcraft-text">
                    プロのライターが
                    <br />
                    文面A/Bテスト作成
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-xs font-medium pitchcraft-text">
                    貴社用最新リストを
                    <br />
                    個別収集
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-red-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <p className="text-xs font-medium pitchcraft-text">
                    クリックレポートで
                    <br />
                    売れる顧客を検知
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <p className="text-xs font-medium pitchcraft-text">
                    コールフォローまで
                    <br />
                    一貫対応
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section - アニメーションクラスを追加 */}
      <section className="py-20 bg-gray-900 text-white text-center pitchcraft-section scroll-animate" id="problem">
        <div className="pitchcraft-container">
          <div className="space-y-4 mb-12 scroll-slide-left">
            <div className="text-sm font-semibold text-gray-300 uppercase tracking-wider">What We Offer</div>
            <h2 className="text-3xl lg:text-4xl font-bold pitchcraft-heading">
              貴社の新規<span className="text-blue-400">顧客開拓</span>を<br />
              これまでになく簡単に実現します
            </h2>
            <p className="text-xl font-semibold mt-8">このような課題でお困りではありませんか？</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-left scroll-card scroll-animate-delay-1">
              <h3 className="text-lg font-semibold mb-4">
                新規顧客を
                <br />
                開拓したい
              </h3>
              <p className="text-gray-300">
                今月の売上目標が未達成ですか？
                <br />
                PitchCraftはこれまでにない
                <br />
                手軽さとコストパフォーマンスで
                <br />
                法人営業の新規顧客の開拓を可能にします。
              </p>
            </div>
            <div className="text-left scroll-card scroll-animate-delay-2">
              <h3 className="text-lg font-semibold mb-4">
                営業チームの負担を
                <br />
                減らしたい
              </h3>
              <p className="text-gray-300">
                貴社の貴重な営業スタッフを
                <br />
                酷使、残業させていませんか？
                <br />
                PitchCraftならエアコンのきいた部屋にいながら
                <br />
                数分で簡単に新規顧客開拓を始められます。
              </p>
            </div>
            <div className="text-left scroll-card scroll-animate-delay-3">
              <h3 className="text-lg font-semibold mb-4">
                マーケティングの
                <br />
                新しい施策を試したい
              </h3>
              <p className="text-gray-300">
                リスティングやSNS広告の効果が
                <br />
                伸び悩んでいますか？
                <br />
                古くて新しいPitchCraftの手法は、
                <br />
                想像以上のCPAで新規顧客獲得ができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - アニメーションクラスを追加 */}
      <section className="py-20 bg-gray-50 pitchcraft-section scroll-animate" id="how-it-works">
        <div className="pitchcraft-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 scroll-slide-left">
              <div className="space-y-3">
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">How it works</div>
                <h2 className="text-3xl font-bold pitchcraft-heading">PitchCraftの仕組み</h2>
                <p className="text-xl text-blue-600 font-semibold pitchcraft-text-large">
                  PitchCraftは、企業のお問い合わせフォームから
                  <br />
                  貴社の商品を効率的に営業する
                  <br />
                  BtoB事業者様向けの営業代行サービスです。
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h3 className="font-bold text-lg uppercase tracking-wider">シンプル</h3>
                  </div>
                  <p className="text-gray-700">
                    行っていただく準備は、フォームに３回記入いただくだけ！
                    <br />
                    記入内容も商材・サービスの概要など簡単です。
                    <br />
                    テレアポなど従来のマーケティング手法にはないシンプルさ。
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h3 className="font-bold text-lg uppercase tracking-wider">スピード</h3>
                  </div>
                  <p className="text-gray-700">
                    独自のRPAシステムを駆使して、効率的に送信。
                    <br />
                    アタック（フォーム営業）開始まで最短で５日のスピードを実現！
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h3 className="font-bold text-lg uppercase tracking-wider">安心</h3>
                  </div>
                  <p className="text-gray-700">
                    AIによる自動化に加えて、BtoBマーケティングの
                    <br />
                    経験を積んだ専任スタッフがターゲットリストの選定から文面の作成まで担当するので安心！
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:block scroll-slide-right">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="PitchCraftシステム"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 pitchcraft-gradient-blue">
        <div className="pitchcraft-container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 pitchcraft-heading">
            ご相談や<span className="lg:hidden">資料請求のみもお気軽に!</span>
            <span className="hidden lg:inline">資料請求のみもお気軽にご連絡ください</span>
          </h2>
          <div className="flex justify-center mb-8">
            <Image
              src="/placeholder.svg?height=60&width=200"
              alt="PitchCraftは徹底的にサポート"
              width={200}
              height={60}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button
              size="lg"
              variant="secondary"
              className="flex items-center justify-between px-8 py-6 pitchcraft-button"
              onClick={scrollToApply}
            >
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-bold">フォーム</div>
                  <div>で質問・相談</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="flex items-center justify-between px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 pitchcraft-button"
            >
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-bold">電話</div>
                  <div>で質問・相談</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <ArrowRight className="w-5 h-5" />
                <div className="text-xs mt-1">090-9867-6524</div>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Smart Targeting - アニメーションクラスを追加 */}
      <section className="py-20 text-center pitchcraft-section scroll-animate" id="ai-targeting">
        <div className="pitchcraft-container">
          <div className="space-y-4 mb-16 scroll-animate">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">PITCHCRAFT AI</div>
            <h2 className="text-3xl lg:text-4xl font-bold pitchcraft-heading">
              "売れる"お客様を発見する
              <br />
              最先端のPitchCraftAI
              <br />
              「スマートターゲティング」
            </h2>
            <p className="text-xl text-blue-600 font-semibold">
              見込み顧客の関心・行動データを分析、
              <br />
              貴社に最適化した見込み顧客リストを作成
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center scroll-card scroll-animate-delay-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-4">リアルタイムの企業情報収集</h3>
              <p className="text-gray-600">
                最新の企業活動情報を収集し、
                <br />
                見込み顧客が「今」会いたい企業を分析
              </p>
            </div>
            <div className="text-center scroll-card scroll-animate-delay-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-4">関心・行動解析データ</h3>
              <p className="text-gray-600">
                見込み顧客の活動を分析し、
                <br />
                営業機会を逃さずにキャッチ
              </p>
            </div>
            <div className="text-center scroll-card scroll-animate-delay-3">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold mb-4">顧客の反応をデータ化</h3>
              <p className="text-gray-600">
                アウトバウンドセールスへの
                <br />
                反応を独自ツールで計測
              </p>
            </div>
          </div>

          <p className="text-lg font-semibold mb-12">分析結果を活用し、最適な見込み顧客にアタック</p>

          <div className="bg-gray-50 p-8 rounded-lg pitchcraft-card">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="AIターゲティング"
                  width={400}
                  height={300}
                  className="mx-auto"
                />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-600 mb-2">分析活用例</div>
                <h3 className="text-xl font-bold text-blue-600 mb-4 pitchcraft-heading">
                  Googleマップのエリア情報から、
                  <br />
                  地域の見込み顧客をリスト化
                </h3>
                <p className="text-gray-700">
                  分析結果をもとに、Googleマップを活用したアプローチが最適と判断。
                  <br />
                  貴社周辺の確度の高い見込み顧客をリスト化しアタックします。
                  <br />
                  地域性が強い企業様（金属加工業、建設業、施行業、リサイクル業、運送業、地域サービス業、など）に高い反響率が見込めます。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-bold mb-6">ほかにも、さまざまな活動情報を活用しアタックします</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg pitchcraft-card">
                <p className="font-semibold text-blue-600">導入を判断する役職担当者情報</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg pitchcraft-card">
                <p className="font-semibold text-blue-600">広告出稿企業の情報</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg pitchcraft-card">
                <p className="font-semibold text-blue-600">プレスリリースや求人情報などの企業活動データ</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg pitchcraft-card">
                <p className="font-semibold text-blue-600">他多数</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Slider */}
      <section className="py-20 bg-gray-100 pitchcraft-section">
        <div className="pitchcraft-container">
          <h2 className="text-3xl font-bold text-center mb-12 pitchcraft-heading">スマートターゲティング活用事例</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="pitchcraft-card">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="お弁当の仕出し宅配"
                  width={300}
                  height={200}
                  className="w-full rounded-lg mb-4"
                />
                <h3 className="font-bold mb-2 pitchcraft-heading">お弁当の仕出し宅配、廃液回収業</h3>
                <p className="text-gray-600">巡回エリアに基づいて道路やエリアを限定したアプローチをご提案</p>
              </CardContent>
            </Card>

            <Card className="pitchcraft-card">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="不動産会社"
                  width={300}
                  height={200}
                  className="w-full rounded-lg mb-4"
                />
                <h3 className="font-bold mb-2 pitchcraft-heading">不動産会社、工務店</h3>
                <p className="text-gray-600">
                  建設資材や建設や土木工事などの一部工程の請負（庭工事、基礎工事、レンガ、足場組み、清掃など）をご提案
                </p>
              </CardContent>
            </Card>

            <Card className="pitchcraft-card">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="ソフトウェア業"
                  width={300}
                  height={200}
                  className="w-full rounded-lg mb-4"
                />
                <h3 className="font-bold mb-2 pitchcraft-heading">大手企業向けソフトウェアやソリューション業</h3>
                <p className="text-gray-600">
                  一部署、一担当毎に信頼関係を構築しながら接点を作っていく丁寧な営業をご提案
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center mt-8 text-lg font-semibold">
            <span className="text-blue-600">貴社の業種や事業形態</span>に最適なご提案をいたします
          </p>
        </div>
      </section>

      {/* Testimonials - アニメーションクラスを追加 */}
      <section className="py-20 bg-gray-50 pitchcraft-section scroll-animate" id="situation">
        <div className="pitchcraft-container">
          <div className="text-center space-y-4 mb-16 scroll-animate">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Case Study</div>
            <h2 className="text-3xl lg:text-4xl font-bold pitchcraft-heading">活用事例</h2>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg pitchcraft-card scroll-card scroll-animate-delay-1">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="ABCマテリアル"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="font-bold text-lg pitchcraft-heading">廃プラスチック買取、リサイクル業</h3>
                      <p className="text-gray-600">株式会社ABCマテリアル様</p>
                    </div>
                    <h4 className="text-xl font-bold mb-4 pitchcraft-heading">
                      「私の体がアポで埋まってほかのことができないくらい」
                    </h4>
                    <p className="text-gray-700">
                      1カ月目の送信では、9件のアポイントを獲得できました。今のところ3件の成約をいただき、他にも廃棄物がたまったらご連絡をいただけることになっている企業さんもいます。
                      <span className="font-semibold text-blue-600">
                        これまでお付き合いのなかった業種の企業を開拓できた
                      </span>
                      ことは大きな成果でした。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg pitchcraft-card scroll-card scroll-animate-delay-2">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="ディップ"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="font-bold text-lg pitchcraft-heading">求人広告、人材紹介事業</h3>
                      <p className="text-gray-600">ディップ株式会社様</p>
                    </div>
                    <h4 className="text-xl font-bold mb-4 pitchcraft-heading">
                      「はじめての利用で、いきなり5件のアポを獲得」
                    </h4>
                    <p className="text-gray-700">
                      エンジニア人材紹介サービスの新規事業立ち上げ時に利用しました。担当者の方にもスムーズにご対応頂き、大変助かりました。
                      <span className="font-semibold text-blue-600">
                        スタートアップや中小企業はもちろん大手企業の方にもおすすめできるサービス
                      </span>
                      だと思います。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg pitchcraft-card scroll-card scroll-animate-delay-3">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="ランサーズ"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="font-bold text-lg pitchcraft-heading">クラウドソーシング業</h3>
                      <p className="text-gray-600">ランサーズ株式会社様</p>
                    </div>
                    <h4 className="text-xl font-bold mb-4 pitchcraft-heading">「とにかく担当者が楽」</h4>
                    <p className="text-gray-700">
                      費用面でも他の施策と比べ受注単価を低く抑えられました。依頼どおりのリストと的確なセールスレターの文案が提案されたため、社内でのチェック作業もスムーズでした。
                      <span className="font-semibold text-blue-600">ほぼ手間がかからずDM業務の負荷が減りました。</span>
                      受注につながる上質なリードを獲得できたことに満足しています。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg pitchcraft-card scroll-card scroll-animate-delay-4">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="東栄コーティング"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="font-bold text-lg pitchcraft-heading">金属加工業</h3>
                      <p className="text-gray-600">東栄コーティング株式会社様</p>
                    </div>
                    <h4 className="text-xl font-bold mb-4 pitchcraft-heading">「月売上の約3割の注文金額を獲得」</h4>
                    <p className="text-gray-700">
                      コロナの影響で事業継続が難しくなり、効率的な営業活動で販路を開拓するために導入しました。
                      <span className="font-semibold text-blue-600">
                        セールスレター内のURLに反応があった顧客にPitchCraftのスタッフが電話をかける
                      </span>
                      「コールフォローサービス」をオプションで追加したことも成果につながりました。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CV Section Repeat */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 pitchcraft-gradient-blue">
        <div className="pitchcraft-container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 pitchcraft-heading">
            ご相談や<span className="lg:hidden">資料請求のみもお気軽に!</span>
            <span className="hidden lg:inline">資料請求のみもお気軽にご連絡ください</span>
          </h2>
          <div className="flex justify-center mb-8">
            <Image
              src="/placeholder.svg?height=60&width=200"
              alt="PitchCraftは徹底的にサポート"
              width={200}
              height={60}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button
              size="lg"
              variant="secondary"
              className="flex items-center justify-between px-8 py-6 pitchcraft-button"
              onClick={scrollToApply}
            >
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-bold">フォーム</div>
                  <div>で質問・相談</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="flex items-center justify-between px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 pitchcraft-button"
            >
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-bold">電話</div>
                  <div>で質問・相談</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <ArrowRight className="w-5 h-5" />
                <div className="text-xs mt-1">090-9867-6524</div>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50 pitchcraft-section" id="support">
        <div className="pitchcraft-container">
          <div className="text-center space-y-4 mb-16">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Support</div>
            <h2 className="text-3xl lg:text-4xl font-bold pitchcraft-heading">専属チームによるサポート</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="カスタマーサクセス"
                width={400}
                height={300}
                className="mx-auto mb-6"
              />
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600">カスタマーサクセス</div>
                  <h3 className="text-xl font-bold pitchcraft-heading">月1回の戦略会議</h3>
                </div>
                <p className="text-gray-700">
                  アプローチするターゲット層や訴求メッセージなどをご相談しながらキャンペーン戦略を組み立てます。お客様に伴走することでツールだけでは発見できないBtoBのダイレクトマーケティングの勝ちパターンの発見をご支援します。
                </p>
              </div>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="ライター"
                width={400}
                height={300}
                className="mx-auto mb-6"
              />
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600">ライター</div>
                  <h3 className="text-xl font-bold pitchcraft-heading">文面のA/Bテストご提案</h3>
                </div>
                <p className="text-gray-700">
                  セールスレターの制作実績を積んたライターが文面を毎月複数制作し、テストを繰り返し行っていくことでアポイント獲得率を向上させます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi Channel Plan */}
      <section className="py-20 bg-gray-50 pitchcraft-section" id="multipleChannel">
        <div className="pitchcraft-container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold pitchcraft-heading">マルチチャネルプラン</h2>
            <p className="text-xl text-blue-600 font-semibold">
              結果に応じて、営業チャネルを最適化
              <br />
              3つのプランを毎月自由に変更可能
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="フォーム+コールフォロー"
                  width={300}
                  height={200}
                  className="mx-auto"
                />
                <p className="text-sm text-gray-600 mt-2">商材訴求が明確な場合</p>
              </div>
              <h3 className="text-xl font-bold mb-4 pitchcraft-heading">フォーム+コールフォロープラン</h3>
              <p className="text-gray-700">フォームへのアタック後に反応のあった顧客にテレアポします</p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="フルコール"
                  width={300}
                  height={200}
                  className="mx-auto"
                />
                <p className="text-sm text-gray-600 mt-2">ターゲットが明確な場合</p>
              </div>
              <h3 className="text-xl font-bold mb-4 pitchcraft-heading">フルコールプラン</h3>
              <p className="text-gray-700">アタックリストすべてにテレアポします</p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="手書き風手紙"
                  width={300}
                  height={200}
                  className="mx-auto"
                />
                <p className="text-sm text-gray-600 mt-2">決済者アポに強い</p>
              </div>
              <h3 className="text-xl font-bold mb-4 pitchcraft-heading">手書き風手紙+コールプラン</h3>
              <p className="text-gray-700">高級和紙を使った便箋で手書き風手紙を決裁者に郵送します</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50 text-center pitchcraft-section" id="comparison">
        <div className="pitchcraft-container">
          <div className="space-y-4 mb-16">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Comparison</div>
            <h2 className="text-3xl lg:text-4xl font-bold pitchcraft-heading">他社との比較</h2>
            <p className="text-xl text-blue-600 font-semibold">
              圧倒的手軽さとサポート力が、お客様に選ばれる理由です。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg pitchcraft-table">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left font-bold">比較表</th>
                  <th className="p-4 bg-blue-50 border-2 border-blue-200">
                    <div className="font-bold text-blue-600 pitchcraft-heading">PITCHCRAFT</div>
                  </th>
                  <th className="p-4">フォーム代行A社</th>
                  <th className="p-4">フォーム代行B社</th>
                  <th className="p-4">フォーム代行C社</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-semibold">提供形態</td>
                  <td className="p-4 bg-blue-50 border-x-2 border-blue-200">
                    <strong>営業サービス</strong>
                  </td>
                  <td className="p-4">
                    <strong>営業サービス</strong>
                  </td>
                  <td className="p-4">
                    <strong>営業ツール</strong>
                  </td>
                  <td className="p-4">
                    <strong>営業ツール</strong>
                  </td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="p-4 font-semibold">配信までに必要なお客様の対応</td>
                  <td className="p-4 bg-blue-50 border-x-2 border-blue-200">
                    <strong>提案をチェック</strong>
                  </td>
                  <td className="p-4">
                    <strong>提案をチェック</strong>
                  </td>
                  <td className="p-4">
                    <strong>リスト作成・精査、文面作成</strong>
                  </td>
                  <td className="p-4">
                    <strong>リスト作成・精査、文面作成</strong>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-semibold">アタックリスト作成機能</td>
                  <td className="p-4 bg-blue-50 border-x-2 border-blue-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="p-4 font-semibold">アタックリストの精査・カスタマイズ</td>
                  <td className="p-4 bg-blue-50 border-x-2 border-blue-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    <p className="text-sm mt-1">貴社用の最新データを個別収集しご提案</p>
                  </td>
                  <td className="p-4">
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                    <p className="text-sm mt-1">お客様が対応</p>
                  </td>
                  <td className="p-4">
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                    <p className="text-sm mt-1">お客様が対応</p>
                  </td>
                  <td className="p-4">
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                    <p className="text-sm mt-1">お客様が対応</p>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-semibold">文面作成</td>
                  <td className="p-4 bg-blue-50 border-x-2 border-blue-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    <p className="text-sm mt-1">プロのライターがA/Bテスト案まで作成</p>
                  </td>
                  <td className="p-4">
                    <div className="w-6 h-6 bg-yellow-400 rounded mx-auto"></div>
                    <p className="text-sm mt-1">お客様が作成、有料サポートあり</p>
                  </td>
                  <td className="p-4">
                    <div className="w-6 h-6 bg-yellow-400 rounded mx-auto"></div>
                    <p className="text-sm mt-1">お客様が作成、サポートあり</p>
                  </td>
                  <td className="p-4">
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                    <p className="text-sm mt-1">お客様が作成</p>
                  </td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="p-4 font-semibold">お客様サポート</td>
                  <td className="p-4 bg-blue-50 border-x-2 border-blue-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    <p className="text-sm mt-1">月1回定例会 アポイント獲得案をご提案</p>
                  </td>
                  <td className="p-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    <p className="text-sm mt-1">電話・対面でサポート</p>
                  </td>
                  <td className="p-4">
                    <div className="w-6 h-6 bg-yellow-400 rounded mx-auto"></div>
                    <p className="text-sm mt-1">ツールの使い方をサポート</p>
                  </td>
                  <td className="p-4">
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                    <p className="text-sm mt-1">なし</p>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-semibold">送信完了率</td>
                  <td className="p-4 bg-blue-50 border-x-2 border-blue-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    <p className="text-sm mt-1 font-bold">100%</p>
                  </td>
                  <td className="p-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    <p className="text-sm mt-1">100%</p>
                  </td>
                  <td className="p-4">
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                    <p className="text-sm mt-1">50〜60%</p>
                  </td>
                  <td className="p-4">
                    <div className="w-6 h-6 bg-yellow-400 rounded mx-auto"></div>
                    <p className="text-sm mt-1">50〜70%</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CV Section Repeat */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 pitchcraft-gradient-blue">
        <div className="pitchcraft-container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 pitchcraft-heading">
            ご相談や<span className="lg:hidden">資料請求のみもお気軽に!</span>
            <span className="hidden lg:inline">資料請求のみもお気軽にご連絡ください</span>
          </h2>
          <div className="flex justify-center mb-8">
            <Image
              src="/placeholder.svg?height=60&width=200"
              alt="PitchCraftは徹底的にサポート"
              width={200}
              height={60}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button
              size="lg"
              variant="secondary"
              className="flex items-center justify-between px-8 py-6 pitchcraft-button"
              onClick={scrollToApply}
            >
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-bold">フォーム</div>
                  <div>で質問・相談</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="flex items-center justify-between px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 pitchcraft-button"
            >
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-bold">電話</div>
                  <div>で質問・相談</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <ArrowRight className="w-5 h-5" />
                <div className="text-xs mt-1">090-9867-6524</div>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50 text-center pitchcraft-section" id="pricing">
        <div className="pitchcraft-container">
          <div className="space-y-4 mb-16">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Pricing</div>
            <h2 className="text-3xl lg:text-4xl font-bold pitchcraft-heading">ご利用料金</h2>
            <p className="text-xl text-blue-600 font-semibold">
              思い立ったその日にスタートできる
              <br />
              料金プランをご用意しました。
            </p>

            <div className="flex justify-center space-x-8 mb-8">
              <label className="flex items-center">
                <input type="radio" name="price" value="12month" defaultChecked className="mr-2" />
                <span className="text-xl font-bold">12ヶ月</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="price" value="18month" className="mr-2" />
                <span className="text-xl font-bold">18ヶ月</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="price" value="24month" className="mr-2" />
                <span className="text-xl font-bold">24ヶ月</span>
              </label>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Trial Plan */}
            <div className="space-y-6">
              <Card className="bg-blue-600 text-white pricing-card pitchcraft-card">
                <CardHeader className="text-center pb-4 pricing-header">
                  <div className="text-sm font-semibold uppercase tracking-wider">トライアル</div>
                  <div className="flex justify-center items-end mt-4">
                    <span className="text-5xl font-bold">1</span>
                    <span className="text-sm ml-2 mb-2">万円 (税別) /初回のみ・社数限定</span>
                  </div>
                </CardHeader>
              </Card>
              <div className="text-left space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>送付件数: 100社</span>
                </div>
                <div className="text-gray-500">送付後の電話フォローなし</div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>アタックリストを弊社からご提案</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>文面は貴社よりご提供</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 pitchcraft-button" onClick={scrollToApply}>
                お申込・資料請求
              </Button>
            </div>

            {/* Light Plan */}
            <div className="space-y-6">
              <Card className="bg-gray-600 text-white pricing-card pitchcraft-card">
                <CardHeader className="text-center pb-4 pricing-header">
                  <div className="text-sm font-semibold uppercase tracking-wider">ライト</div>
                  <div className="flex justify-center items-end mt-4">
                    <span className="text-5xl font-bold">15</span>
                    <span className="text-sm ml-2 mb-2">万円 (税別) / 月</span>
                  </div>
                  <div className="text-center mt-2">
                    利用期間：<span className="font-bold">12</span>ヶ月
                  </div>
                </CardHeader>
              </Card>
              <div className="text-left space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>送付件数: 600社 / 月</span>
                </div>
                <div className="text-gray-500">送付後のクリックレポートなし</div>
                <div className="text-gray-500">送付後の電話フォローなし</div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>アタックリストを弊社からご提案</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>文面は弊社が下書きし、ご提案</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>文面のA/Bテスト案を作成しご提案</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>月1回の戦略ミーティング</span>
                </div>
                <div className="text-gray-500">送付完了保証なし</div>
              </div>
              <Button variant="outline" className="w-full pitchcraft-button" onClick={scrollToApply}>
                お申込・資料請求
              </Button>
            </div>

            {/* Basic Plan */}
            <div className="space-y-6">
              <Card className="bg-blue-600 text-white pricing-card pitchcraft-card">
                <CardHeader className="text-center pb-4 pricing-header">
                  <div className="text-sm font-semibold uppercase tracking-wider">ベーシック</div>
                  <div className="flex justify-center items-end mt-4">
                    <span className="text-5xl font-bold">18</span>
                    <span className="text-sm ml-2 mb-2">万円 (税別) / 月</span>
                  </div>
                  <div className="text-center mt-2">
                    利用期間：<span className="font-bold">12</span>ヶ月
                  </div>
                </CardHeader>
              </Card>
              <div className="text-left space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>送付件数: 600社 / 月</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">●</span>
                  <span>送付後のクリックレポート提供</span>
                </div>
                <div className="text-gray-500">送付後の電話フォローなし</div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>アタックリストを弊社からご提案</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>文面は弊社が下書きし、ご提案</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>文面のA/Bテスト案を作成しご提案</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>月1回の戦略ミーティング</span>
                </div>
                <div className="text-gray-500">送付完了保証なし</div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 pitchcraft-button" onClick={scrollToApply}>
                お申込・資料請求
              </Button>
            </div>

            {/* Standard Plan */}
            <div className="space-y-6">
              <Card className="bg-orange-500 text-white pricing-card pitchcraft-card relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-red-500 text-white">おすすめ</Badge>
                </div>
                <CardHeader className="text-center pb-4 pricing-header">
                  <div className="text-sm font-semibold uppercase tracking-wider">スタンダード</div>
                  <div className="flex justify-center items-end mt-4">
                    <span className="text-5xl font-bold">24</span>
                    <span className="text-sm ml-2 mb-2">万円 (税別) / 月</span>
                  </div>
                  <div className="text-center mt-2">
                    利用期間：<span className="font-bold">12</span>ヶ月
                  </div>
                </CardHeader>
              </Card>
              <div className="text-left space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>送付件数: 800社 / 月</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">●</span>
                  <span>送付後のクリックレポート提供</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">●</span>
                  <span>送付後の電話フォローあり</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>アタックリストを弊社からご提案</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>文面は弊社が下書きし、ご提案</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>文面のA/Bテスト案を作成しご提案</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>月1回の戦略ミーティング</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>送付完了保証</span>
                </div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 pitchcraft-button" onClick={scrollToApply}>
                お申込・資料請求
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4">プランに迷っていてご相談されたい場合や、資料請求もお気軽にご連絡ください。</p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 pitchcraft-button" onClick={scrollToApply}>
              相談・資料請求する
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Voice */}
      <section className="py-20 bg-gray-50 pitchcraft-section" id="customerVoice">
        <div className="pitchcraft-container">
          <div className="text-center space-y-4 mb-16">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Customer Voice</div>
            <h2 className="text-3xl lg:text-4xl font-bold pitchcraft-heading">お客様の声</h2>
          </div>

          <Card className="border-0 shadow-lg max-w-4xl mx-auto pitchcraft-card">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-4 pitchcraft-heading">
                    精度の高いリストで上質なリードを獲得
                    <br />
                    専門スタッフによる細かな作業に納得できた
                  </h3>
                  <p className="text-gray-600 mb-4">
                    ランサーズ株式会社様
                    <br />
                    山中藻里さん
                  </p>
                  <p className="text-gray-700">
                    細かい条件を出したにも関わらず、それらをクリアした的確なアタックリストをご提案いただきました。自社所有の見込み客リストとは方向性が異なる企業も含まれており、新業界開拓の余地にも気付くことができました。このクオリティは人の手によるものなんだと納得しましたね。
                    <span className="font-bold">
                      費用面でも、他の施策と比べ受注単価を低く抑えられました。受注につながる上質なリードを獲得できたことに満足しています。
                    </span>
                  </p>
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="お客様の声"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 pitchcraft-section" id="flow">
        <div className="pitchcraft-container">
          <div className="text-center space-y-4 mb-16">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">How to start</div>
            <h2 className="text-3xl lg:text-4xl font-bold pitchcraft-heading">ご利用の流れ</h2>
            <p className="text-xl text-blue-600 font-semibold pitchcraft-text-large">
              PitchCraftは利用開始から終了まで、たった3回フォームを記入するだけ。
              <br />
              皆様が本業に集中できるよう、お手をわずらわせません。
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 pitchcraft-heading">
                    下記にある
                    <Link href="#apply" className="text-blue-600 underline">
                      お申込フォーム
                    </Link>
                    を記入
                  </h3>
                  <p className="text-gray-700">基本情報をご記入頂きます。</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 pitchcraft-heading">フォーム「ヒアリングシート」を記入</h3>
                  <p className="text-gray-700">
                    お申込頂き次第、２つ目のフォームのリンクをお送りします。
                    <br />
                    このフォームでは、貴社の商品・サービスの概要や、ターゲティング情報などをお伺いします。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 pitchcraft-heading">アタックリストの準備</h3>
                  <p className="text-gray-700">弊社にて、新規営業を行うアタックリストを作成します。</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 pitchcraft-heading">フォーム「アタック開始シート」を記入</h3>
                  <p className="text-gray-700">会社情報など、アタック実施に必要となる情報を追加で数点お伺いします。</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 pitchcraft-heading">アタック開始！</h3>
                  <p className="text-gray-700">
                    弊社にて、アタック作業を実施します。レスポンスがあれば、その後は貴社にてご対応頂きます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 pitchcraft-section" id="faq">
        <div className="pitchcraft-container">
          <div className="text-center space-y-4 mb-16">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">FAQ</div>
            <h2 className="text-3xl lg:text-4xl font-bold pitchcraft-heading">よくあるご質問</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card className="pitchcraft-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-left">
                  PitchCraftの特長は何ですか？
                  <ChevronDown className="w-5 h-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  刺さる訴求を伝える「文案」のライティング、反応率が高い法人営業先リスト作成のターゲティング、フォームや決済者アポに強い手紙などの媒体手法を選択できるマルチチャネル。これらから最も効果的な組み合わせである「勝ちパターン」を見つけ、自社の新規顧客開拓ノウハウとして持ち帰っていただくためのBtoBマーケティングに特化した伴走型サービスです。
                </p>
              </CardContent>
            </Card>

            <Card className="pitchcraft-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-left">
                  どんな商材でも販促できるのですか？
                  <ChevronDown className="w-5 h-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 pitchcraft-text">
                  PitchCraftはBtoB（法人向け）商材の営業支援サービスですので、BtoC（消費者向け）の商材についてはサービス対象外です。
                  <br />
                  また、公序良俗に反する、対象がきわめて少ないなど、商材によっては対応できない場合もあります。ご了承ください。
                </p>
              </CardContent>
            </Card>

            <Card className="pitchcraft-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-left">
                  地方の企業も狙えますか？
                  <ChevronDown className="w-5 h-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 pitchcraft-text">
                  PitchCraftは、フォーム送信、テレアポ、手紙などの営業チャネルを組み合わせ、訪問しないでアポイントを獲得するサービスですので、地域や距離を問わずにアプローチできます。
                </p>
              </CardContent>
            </Card>

            <Card className="pitchcraft-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-left">
                  「アタック」とは何ですか？
                  <ChevronDown className="w-5 h-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 pitchcraft-text">
                  貴社の製品やサービスを紹介する文章を、ターゲット企業へアプローチ（フォーム送信、電話架電、手紙発送など）する作業のことです。弊社で企画や準備から実施まですべて代行します。
                </p>
              </CardContent>
            </Card>

            <Card className="pitchcraft-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-left">
                  アタック開始まではどのくらいかかりますか？
                  <ChevronDown className="w-5 h-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 pitchcraft-text">
                  お申し込みと契約完了後に「ヒアリングシート」をご記入いただき次第、CS（カスタマーサクセス）担当者と打ち合わせを実施します。このCS打ち合わせからおよそ3週間前後にアタック開始できるよう準備します。途中でリストや文案について確認のご連絡を随時差し上げますので進捗が把握できます。
                </p>
              </CardContent>
            </Card>

            <Card className="pitchcraft-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-left">
                  商談の獲得や成約を保証してくれますか？
                  <ChevronDown className="w-5 h-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 pitchcraft-text">
                  恐れ入りますが、成果をお約束することはできません。ご了承ください。
                  <br />
                  プロセスが見えない成果保証型サービスや部分的な活動を単に代行する営業代行サービスではなく、PitchCraftは幅広いご提案で売れる体制とノウハウづくりを伴走サポートする営業支援サービスを目指しています。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-20 bg-gray-50 pitchcraft-section" id="apply">
        <div className="pitchcraft-container">
          <div className="space-y-4 mb-16 text-center">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Apply</div>
            <h2 className="text-3xl lg:text-4xl font-bold pitchcraft-heading">お申込/ご相談</h2>
            <p className="text-xl text-blue-600 font-semibold">
              お申込/ご相談の送信後に、
              <br />
              資料ダウンロードのURLをお送りします。
              <br />
              またお打ち合わせ確認のご連絡も差し上げます。
            </p>
          </div>

          <div className="mb-8 text-center">
            <p className="text-sm mb-2">お電話でもお申込みいただけます</p>
            <p className="text-xl font-bold">
              <Link href="tel:050-3184-3852" className="text-blue-600">
                050-3184-3852
              </Link>
            </p>
            <p className="text-xs text-gray-600">9:30〜18:00（土日祝除く）</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg pitchcraft-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">会社名 *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    disabled={isPending}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pitchcraft-form-input disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">お名前 *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isPending}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pitchcraft-form-input disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isPending}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pitchcraft-form-input disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">電話番号</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isPending}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pitchcraft-form-input disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ご相談内容</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  disabled={isPending}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pitchcraft-form-input disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="ご質問やご相談内容をお聞かせください"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 text-lg pitchcraft-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>送信中...</span>
                  </div>
                ) : (
                  "送信する"
                )}
              </Button>

              {/* 送信結果メッセージ */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">送信が完了しました！</span>
                  </div>
                  <p className="text-green-600 text-sm mt-2">
                    お申込みありがとうございます。資料ダウンロードのURLをお送りしますので、しばらくお待ちください。
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 text-red-700">
                    <X className="w-5 h-5" />
                    <span className="font-semibold">送信に失敗しました</span>
                  </div>
                  <p className="text-red-600 text-sm mt-2">
                    申し訳ございません。もう一度お試しいただくか、お電話でお問い合わせください。
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-gray-50 pitchcraft-section">
        <div className="pitchcraft-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-gray-600 pitchcraft-heading">会社概要</h3>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden pitchcraft-card">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <th className="bg-gray-50 px-6 py-4 text-left font-bold w-32">会社名</th>
                    <td className="px-6 py-4 pitchcraft-text">PitchCraft株式会社</td>
                  </tr>
                  <tr className="border-b">
                    <th className="bg-gray-50 px-6 py-4 text-left font-bold">所在地</th>
                    <td className="px-6 py-4 pitchcraft-text">東京都新宿区中町19-6</td>
                  </tr>
                  <tr className="border-b">
                    <th className="bg-gray-50 px-6 py-4 text-left font-bold">連絡先</th>
                    <td className="px-6 py-4 pitchcraft-text">cs@imejin.biz</td>
                  </tr>
                  <tr className="border-b">
                    <th className="bg-gray-50 px-6 py-4 text-left font-bold">代表者</th>
                    <td className="px-6 py-4 pitchcraft-text">松木友範</td>
                  </tr>
                  <tr className="border-b">
                    <th className="bg-gray-50 px-6 py-4 text-left font-bold">設立</th>
                    <td className="px-6 py-4 pitchcraft-text">2015年7月</td>
                  </tr>
                  <tr>
                    <th className="bg-gray-50 px-6 py-4 text-left font-bold">主要取引先</th>
                    <td className="px-6 py-4 pitchcraft-text">
                      株式会社オイシックス、日清食品ホールディングス株式会社、株式会社JTB、日揮株式会社、ソウルドアウト株式会社、ディップ株式会社、株式会社アルバイトタイムス、ほか
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8 space-y-2">
              <Link href="/company" className="text-blue-600 hover:underline block">
                PitchCraft株式会社の会社概要はこちら
              </Link>
              <Link href="#" className="text-blue-600 hover:underline block">
                新規開拓をブーストするウェブメディア「PitchCraftタイムズ」
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-20 bg-gray-50 pitchcraft-section">
        <div className="pitchcraft-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-gray-600 pitchcraft-heading">会社概要</h3>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden pitchcraft-card">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <th className="bg-gray-50 px-6 py-4 text-left font-bold w-32">会社名</th>
                    <td className="px-6 py-4 pitchcraft-text">PitchCraft株式会社</td>
                  </tr>
                  <tr className="border-b">
                    <th className="bg-gray-50 px-6 py-4 text-left font-bold">所在地</th>
                    <td className="px-6 py-4 pitchcraft-text">東京都新宿区中町19-6</td>
                  </tr>
                  <tr className="border-b">
                    <th className="bg-gray-50 px-6 py-4 text-left font-bold">連絡先</th>
                    <td className="px-6 py-4 pitchcraft-text">cs@imejin.biz</td>
                  </tr>
                  <tr className="border-b">
                    <th className="bg-gray-50 px-6 py-4 text-left font-bold">代表者</th>
                    <td className="px-6 py-4 pitchcraft-text">松木友範</td>
                  </tr>
                  <tr className="border-b">
                    <th className="bg-gray-50 px-6 py-4 text-left font-bold">設立</th>
                    <td className="px-6 py-4 pitchcraft-text">2015年7月</td>
                  </tr>
                  <tr>
                    <th className="bg-gray-50 px-6 py-4 text-left font-bold">主要取引先</th>
                    <td className="px-6 py-4 pitchcraft-text">
                      株式会社オイシックス、日清食品ホールディングス株式会社、株式会社JTB、日揮株式会社、ソウルドアウト株式会社、ディップ株式会社、株式会社アルバイトタイムス、ほか
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8 space-y-2">
              <Link href="/company" className="text-blue-600 hover:underline block">
                PitchCraft株式会社の会社概要はこちら
              </Link>
              <Link href="#" className="text-blue-600 hover:underline block">
                新規開拓をブーストするウェブメディア「PitchCraftタイムズ」
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center pitchcraft-section">
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
                <Link href="/company" className="text-gray-400 hover:text-white pitchcraft-text-small">
                  PitchCraft会社概要
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  UNIT 1day開発
                </Link>
              </div>
            </div>

            <div className="text-sm text-gray-400 pitchcraft-text-small">
              &copy; 2019 PitchCraft, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Bottom CTA (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 pitchcraft-button">
            <Phone className="w-4 h-4 mr-2" />
            電話で申込み
          </Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700 pitchcraft-button" onClick={scrollToApply}>
            <Mail className="w-4 h-4 mr-2" />
            フォームで申込み
          </Button>
        </div>
      </div>
    </div>
  )
}
