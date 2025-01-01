import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ChevronLeft, Mail } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Moteur Rideau Central SI 200kg',
    image: '/placeholder.svg?height=500&width=600',
    category: 'Moteurs',
    description: 'Moteur puissant et fiable conçu pour les rideaux métalliques jusqu\'à 200kg. Installation centrale avec système SI intégré pour une performance optimale.'
  },
  {
    id: 2,
    name: 'Moteur Rideau Central SI Axe 76 200kg',
    image: '/placeholder.svg?height=500&width=600',
    category: 'Moteurs',
    description: 'Version spéciale avec axe 76mm, parfaite pour les installations spécifiques. Capacité de 200kg avec système SI pour une utilisation sûre et efficace.'
  },
  {
    id: 3,
    name: 'Moteur Rideau Central DI 300kg',
    image: '/placeholder.svg?height=500&width=600',
    category: 'Moteurs',
    description: 'Notre modèle le plus puissant avec une capacité de 300kg. Système DI intégré pour une meilleure performance et durabilité.'
  },
  {
    id: 4,
    name: 'Lampe Clignotante',
    image: '/placeholder.svg?height=500&width=600',
    category: 'Accessoires',
    description: 'Lampe de signalisation clignotante pour une sécurité accrue. Design robuste et installation facile.'
  }
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id))
  
  if (!product) {
    return <div>Produit non trouvé</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/produit" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Retour aux produits
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="relative h-[400px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div>
              <p className="text-gray-500 mb-2">{product.category}</p>
              <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
              <p className="text-gray-600 mb-8">{product.description}</p>
              
              <Button className="w-full md:w-auto flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                Demander plus d&apos;informations
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

