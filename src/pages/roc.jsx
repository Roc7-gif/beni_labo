export function Roc() {
  return (
    <>
      <div class="font-sans bg-light text-dark">
        <header class="bg-white shadow-sm">
          <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-primary rounded-lg"></div>
                <span class="text-xl font-bold text-primary">Readdly</span>
              </div>

              <nav class="hidden md:flex space-x-8">
                <a href="#" class="text-dark hover:text-primary font-medium">
                  Accueil
                </a>
                <a href="#" class="text-dark hover:text-primary font-medium">
                  Bibliothèque
                </a>
                <a href="#" class="text-dark hover:text-primary font-medium">
                  Catégories
                </a>
                <a href="#" class="text-dark hover:text-primary font-medium">
                  Nouveautés
                </a>
                <a href="#" class="text-dark hover:text-primary font-medium">
                  À propos
                </a>
              </nav>

              <div class="flex items-center space-x-4">
                <button class="text-dark hover:text-primary">
                  <i class="fas fa-search"></i>
                </button>
                <button class="text-dark hover:text-primary">
                  <i class="fas fa-bookmark"></i>
                </button>
                <button class="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-secondary transition">
                  Connexion
                </button>
                <button class="md:hidden text-dark">
                  <i class="fas fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </header>

        <section class="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div class="container mx-auto px-4">
            <div class="max-w-2xl">
              <h1 class="text-4xl md:text-5xl font-bold mb-4">
                Votre bibliothèque numérique
              </h1>
              <p class="text-xl mb-8 opacity-90">
                Découvrez des milliers de livres, magazines et articles à lire
                en ligne ou hors ligne.
              </p>
              <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button class="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Commencer gratuitement
                </button>
                <button class="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition">
                  Explorer la bibliothèque
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="py-16 bg-white">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">
              Pourquoi choisir Readdly ?
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-light p-6 rounded-xl shadow-sm">
                <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                  <i class="fas fa-book-open text-xl"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2">Lecture illimitée</h3>
                <p class="text-gray-600">
                  Accédez à notre collection complète sans restrictions. Lisez
                  autant que vous voulez, quand vous voulez.
                </p>
              </div>

              <div class="bg-light p-6 rounded-xl shadow-sm">
                <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white mb-4">
                  <i class="fas fa-mobile-alt text-xl"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2">Lecture hors ligne</h3>
                <p class="text-gray-600">
                  Téléchargez vos lectures pour les consulter même sans
                  connexion Internet.
                </p>
              </div>

              <div class="bg-light p-6 rounded-xl shadow-sm">
                <div class="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white mb-4">
                  <i class="fas fa-user-friends text-xl"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2">
                  Recommandations personnalisées
                </h3>
                <p class="text-gray-600">
                  Recevez des suggestions de lecture adaptées à vos goûts et
                  centres d'intérêt.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="py-16 bg-light">
          <div class="container mx-auto px-4">
            <div class="flex justify-between items-center mb-8">
              <h2 class="text-3xl font-bold">Lectures populaires</h2>
              <a href="#" class="text-primary font-medium hover:text-secondary">
                Voir tout <i class="fas fa-arrow-right ml-1"></i>
              </a>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <div class="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div class="text-center p-4">
                    <div class="w-16 h-24 bg-white shadow-md mx-auto mb-2"></div>
                    <h4 class="font-semibold text-sm">
                      Le Château des étoiles
                    </h4>
                    <p class="text-xs text-gray-500">Jean Dupont</p>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex justify-between items-center">
                    <div class="flex text-yellow-400">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                    <span class="text-xs text-gray-500">4.5</span>
                  </div>
                  <button class="w-full mt-3 bg-primary text-white py-2 rounded text-sm font-medium hover:bg-secondary transition">
                    Lire maintenant
                  </button>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <div class="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div class="text-center p-4">
                    <div class="w-16 h-24 bg-white shadow-md mx-auto mb-2"></div>
                    <h4 class="font-semibold text-sm">L'Écho du silence</h4>
                    <p class="text-xs text-gray-500">Marie Leroy</p>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex justify-between items-center">
                    <div class="flex text-yellow-400">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="far fa-star"></i>
                    </div>
                    <span class="text-xs text-gray-500">4.0</span>
                  </div>
                  <button class="w-full mt-3 bg-primary text-white py-2 rounded text-sm font-medium hover:bg-secondary transition">
                    Lire maintenant
                  </button>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <div class="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <div class="text-center p-4">
                    <div class="w-16 h-24 bg-white shadow-md mx-auto mb-2"></div>
                    <h4 class="font-semibold text-sm">Les Ombres du passé</h4>
                    <p class="text-xs text-gray-500">Thomas Martin</p>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex justify-between items-center">
                    <div class="flex text-yellow-400">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <span class="text-xs text-gray-500">5.0</span>
                  </div>
                  <button class="w-full mt-3 bg-primary text-white py-2 rounded text-sm font-medium hover:bg-secondary transition">
                    Lire maintenant
                  </button>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <div class="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <div class="text-center p-4">
                    <div class="w-16 h-24 bg-white shadow-md mx-auto mb-2"></div>
                    <h4 class="font-semibold text-sm">Au-delà des mots</h4>
                    <p class="text-xs text-gray-500">Sophie Bernard</p>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex justify-between items-center">
                    <div class="flex text-yellow-400">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                      <i class="far fa-star"></i>
                    </div>
                    <span class="text-xs text-gray-500">3.5</span>
                  </div>
                  <button class="w-full mt-3 bg-primary text-white py-2 rounded text-sm font-medium hover:bg-secondary transition">
                    Lire maintenant
                  </button>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <div class="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <div class="text-center p-4">
                    <div class="w-16 h-24 bg-white shadow-md mx-auto mb-2"></div>
                    <h4 class="font-semibold text-sm">Le Jardin secret</h4>
                    <p class="text-xs text-gray-500">Élise Moreau</p>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex justify-between items-center">
                    <div class="flex text-yellow-400">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <span class="text-xs text-gray-500">5.0</span>
                  </div>
                  <button class="w-full mt-3 bg-primary text-white py-2 rounded text-sm font-medium hover:bg-secondary transition">
                    Lire maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-16 bg-white">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">
              Parcourir par catégories
            </h2>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="bg-light p-6 rounded-xl text-center hover:shadow-md transition cursor-pointer">
                <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <i class="fas fa-book text-xl"></i>
                </div>
                <h3 class="font-semibold">Romans</h3>
                <p class="text-sm text-gray-500 mt-2">1,245 livres</p>
              </div>

              <div class="bg-light p-6 rounded-xl text-center hover:shadow-md transition cursor-pointer">
                <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <i class="fas fa-flask text-xl"></i>
                </div>
                <h3 class="font-semibold">Science</h3>
                <p class="text-sm text-gray-500 mt-2">856 livres</p>
              </div>

              <div class="bg-light p-6 rounded-xl text-center hover:shadow-md transition cursor-pointer">
                <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <i class="fas fa-history text-xl"></i>
                </div>
                <h3 class="font-semibold">Histoire</h3>
                <p class="text-sm text-gray-500 mt-2">723 livres</p>
              </div>

              <div class="bg-light p-6 rounded-xl text-center hover:shadow-md transition cursor-pointer">
                <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <i class="fas fa-heart text-xl"></i>
                </div>
                <h3 class="font-semibold">Santé</h3>
                <p class="text-sm text-gray-500 mt-2">634 livres</p>
              </div>
            </div>

            <div class="text-center mt-10">
              <button class="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition">
                Voir toutes les catégories
              </button>
            </div>
          </div>
        </section>

        <section class="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">
              Ce que disent nos lecteurs
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white bg-opacity-10 p-6 rounded-xl">
                <div class="flex text-yellow-300 mb-4">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p class="mb-6">
                  "Readdly a transformé ma façon de lire. J'ai accès à des
                  milliers de livres où que je sois. L'application est intuitive
                  et les recommandations sont toujours pertinentes."
                </p>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-white rounded-full mr-4"></div>
                  <div>
                    <h4 class="font-semibold">Camille Leroy</h4>
                    <p class="text-sm opacity-80">Lectrice depuis 2 ans</p>
                  </div>
                </div>
              </div>

              <div class="bg-white bg-opacity-10 p-6 rounded-xl">
                <div class="flex text-yellow-300 mb-4">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <p class="mb-6">
                  "En tant qu'étudiant, Readdly m'a permis d'accéder à des
                  ressources académiques sans me ruiner. La fonction de lecture
                  hors ligne est parfaite pour les trajets en transport."
                </p>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-white rounded-full mr-4"></div>
                  <div>
                    <h4 class="font-semibold">Thomas Moreau</h4>
                    <p class="text-sm opacity-80">Étudiant en littérature</p>
                  </div>
                </div>
              </div>

              <div class="bg-white bg-opacity-10 p-6 rounded-xl">
                <div class="flex text-yellow-300 mb-4">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p class="mb-6">
                  "Je voyage souvent pour mon travail et Readdly m'accompagne
                  partout. Plus besoin de transporter des livres lourds, tout
                  est dans mon téléphone ou ma tablette."
                </p>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-white rounded-full mr-4"></div>
                  <div>
                    <h4 class="font-semibold">Sophie Martin</h4>
                    <p class="text-sm opacity-80">Consultante en entreprise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
