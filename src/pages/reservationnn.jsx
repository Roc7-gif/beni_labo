export function Reservation() {
    return <>

<body class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">Réserver un Service</h1>
            <p class="text-gray-600">Choisissez votre service et planifiez votre intervention</p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-8">
            <div class="bg-white rounded-2xl shadow-lg p-6">
                <h2 class="text-xl font-bold text-gray-900 mb-6">Choisir un Service</h2>
                <div class="space-y-4">
                    <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <i class="ri-tools-fill text-blue-600"></i>
                            </div>
                            <div class="ml-4">
                                <h3 class="font-medium text-gray-900">Plomberie</h3>
                                <p class="text-sm text-gray-500 mt-1">Réparation de fuites, installation sanitaire</p>
                                <div class="flex items-center mt-2">
                                    <span class="text-sm text-gray-700">À partir de</span>
                                    <span class="ml-2 font-bold text-blue-600">25 000 FCFA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                <i class="ri-flashlight-fill text-green-600"></i>
                            </div>
                            <div class="ml-4">
                                <h3 class="font-medium text-gray-900">Électricité</h3>
                                <p class="text-sm text-gray-500 mt-1">Installation, dépannage, mise aux normes</p>
                                <div class="flex items-center mt-2">
                                    <span class="text-sm text-gray-700">À partir de</span>
                                    <span class="ml-2 font-bold text-blue-600">30 000 FCFA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                <i class="ri-hammer-fill text-purple-600"></i>
                            </div>
                            <div class="ml-4">
                                <h3 class="font-medium text-gray-900">Menuiserie</h3>
                                <p class="text-sm text-gray-500 mt-1">Réparation de meubles, pose de portes</p>
                                <div class="flex items-center mt-2">
                                    <span class="text-sm text-gray-700">À partir de</span>
                                    <span class="ml-2 font-bold text-blue-600">35 000 FCFA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                                <i class="ri-paint-fill text-yellow-600"></i>
                            </div>
                            <div class="ml-4">
                                <h3 class="font-medium text-gray-900">Peinture</h3>
                                <p class="text-sm text-gray-500 mt-1">Peinture intérieure et extérieure</p>
                                <div class="flex items-center mt-2">
                                    <span class="text-sm text-gray-700">À partir de</span>
                                    <span class="ml-2 font-bold text-blue-600">40 000 FCFA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bg-white rounded-2xl shadow-lg p-6">
                <h2 class="text-xl font-bold text-gray-900 mb-6">Détails de la Réservation</h2>
                <form class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                            <input required min="2025-10-13" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" type="date"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Heure *</label>
                            <input required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" type="time" />
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Adresse *</label>
                        <textarea required rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" placeholder="Adresse complète de l'intervention"></textarea>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Mode de paiement</label>
                        <select class="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                            <option value="cash">Paiement cash</option>
                            <option value="mtn_money">MTN Mobile Money</option>
                            <option value="moov_money">Moov Money</option>
                            <option value="orange_money">Orange Money</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Instructions spéciales</label>
                        <textarea rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" placeholder="Informations supplémentaires pour le prestataire"></textarea>
                    </div>
                    
                    <button type="submit" disabled class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer">
                        Confirmer la Réservation
                    </button>
                </form>
            </div>
        </div>
    </div>
</body>
    </>
}


