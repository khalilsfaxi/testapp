import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function ResellerSection() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Vous êtes client ou fournisseur?</h2>
          <p className="text-xl text-gray-600 mb-6">Contactez-nous pour plus d&apos;informations!</p>
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Nous contacter
          </Button>
        </div>
        <div>
          <Image
            src="/handshake.jpg?height=400&width=600"
            alt="Business handshake"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

