import React from 'react';
import { ALL_STORE_ITEMS } from '../data/mockData';
import { StoreItem } from '../types';
import { FOCUS_STORE_URL } from '../components/EcosystemSection';
import { 
  ArrowLeft, 
  ShoppingBag, 
  Coins, 
  Check, 
  Sparkles, 
  X, 
  Plus, 
  Minus,
  CheckCircle2,
  Trash2,
  ExternalLink
} from 'lucide-react';

interface StoreViewProps {
  onBack: () => void;
  isDarkMode: boolean;
}

interface CartItem {
  product: StoreItem;
  quantity: number;
  size?: string;
}

export const StoreView: React.FC<StoreViewProps> = ({ onBack, isDarkMode }) => {
  const [items] = React.useState<StoreItem[]>(ALL_STORE_ITEMS);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('Todos');
  const [focusCoinsBalance, setFocusCoinsBalance] = React.useState<number>(1450);
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [selectedSizes, setSelectedSizes] = React.useState<Record<string, string>>({
    'store-1': 'M',
    'store-2': 'G',
  });
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = React.useState<string | null>(null);

  const categories = ['Todos', 'Vestuário', 'Hardware', 'Acessórios', 'Benefícios'];

  const filteredItems = items.filter(
    (item) => selectedCategory === 'Todos' || item.category === selectedCategory
  );

  const addToCart = (product: StoreItem) => {
    const size = product.sizes ? (selectedSizes[product.id] || product.sizes[0]) : undefined;
    
    setCart((prev) => {
      const existing = prev.find(i => i.product.id === product.id && i.size === size);
      if (existing) {
        return prev.map(i => i === existing ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { product, quantity: 1, size }];
    });

    setPurchaseSuccess(`Adicionado à sacola: "${product.name}"!`);
    setTimeout(() => setPurchaseSuccess(null), 3000);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalBrl = cart.reduce((acc, item) => acc + (item.product.priceBrl * item.quantity), 0);
  const totalCoins = cart.reduce((acc, item) => acc + (item.product.focusCoins * item.quantity), 0);

  const handleCheckoutWithCoins = () => {
    if (focusCoinsBalance < totalCoins) {
      alert(`Saldo insuficiente! Você tem ${focusCoinsBalance} Focus Coins, mas o pedido requer ${totalCoins} Focus Coins. Conclua entregas de squad para acumular mais!`);
      return;
    }
    setFocusCoinsBalance(prev => prev - totalCoins);
    setCart([]);
    setIsCartOpen(false);
    setPurchaseSuccess(`Pedido resgatado com sucesso via Focus Coins! Código de rastreamento gerado no Discord.`);
  };

  const handleCheckoutWithBrl = () => {
    setCart([]);
    setIsCartOpen(false);
    setPurchaseSuccess(`Pedido de R$ ${totalBrl.toFixed(2)} confirmado com sucesso! Enviamos a confirmação para seu e-mail.`);
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Top Breadcrumb & Cart button */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 text-xs font-bold transition-colors cursor-pointer px-3 py-1.5 rounded-full border ${
            isDarkMode 
              ? 'border-neutral-800 text-neutral-300 hover:text-white bg-neutral-900' 
              : 'border-neutral-200 text-neutral-700 hover:text-neutral-950 bg-white'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar para a Home</span>
        </button>

        {/* User Coins & Cart triggers */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold font-mono">
            <Coins className="w-3.5 h-3.5" />
            <span>{focusCoinsBalance} Focus Coins</span>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ff5419] text-white text-xs font-bold shadow-xs cursor-pointer relative"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Sacola</span>
            {cart.length > 0 && (
              <span className="w-4 h-4 rounded-full bg-white text-[#ff5419] text-[10px] flex items-center justify-center font-bold">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Header Banner */}
      <div className="mb-8">
        <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase block mb-2">
          SWAG OFICIAL & RECOMPENSAS POR MÉRITO
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 ${
          isDarkMode ? 'text-white' : 'text-neutral-950'
        }`}>
          Focus Store & Swag Squad
        </h1>
        <p className={`text-sm sm:text-base max-w-2xl leading-relaxed ${
          isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
        }`}>
          Vista a camisa da comunidade ou troque suas <strong>Focus Coins</strong> ganhas em entregas de squad, code reviews e hackathons por mentorias e brindes exclusivos.
        </p>
      </div>

      {/* External Redirection Notice Banner */}
      <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#ff5419]/20 via-[#ff5419]/10 to-transparent border border-[#ff5419]/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl shadow-[#ff5419]/5">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#ff5419] text-white">
              Link Externo
            </span>
            <span className="text-xs font-mono text-neutral-400">
              store.focusacademy.dev
            </span>
          </div>
          <h2 className={`text-lg sm:text-xl font-extrabold ${isDarkMode ? 'text-white' : 'text-neutral-950'}`}>
            Acesse a nova plataforma dedicada da Focus Store
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
            Nossa loja oficial agora opera em um site próprio com catálogo completo de moletons, deskmats de atalhos e checkout integrado.
          </p>
        </div>

        <a
          href={FOCUS_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white transition-all shadow-md shadow-[#ff5419]/25 hover:shadow-lg hover:shadow-[#ff5419]/35 active:scale-98 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shrink-0 group"
        >
          <span>Ir para a Loja Oficial</span>
          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Success Notification */}
      {purchaseSuccess && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{purchaseSuccess}</span>
          </div>
          <button onClick={() => setPurchaseSuccess(null)} className="text-neutral-400 hover:text-white">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Category Filters */}
      <div className="flex items-center gap-1.5 mb-8 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#ff5419] text-white shadow-xs'
                : isDarkMode
                  ? 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
                  : 'text-neutral-600 hover:text-neutral-950 bg-white border border-neutral-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          return (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                isDarkMode 
                  ? 'bg-neutral-900 border-neutral-800 hover:border-neutral-700' 
                  : 'bg-white border-neutral-200/90 shadow-xs hover:border-neutral-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    {item.category}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#ff5419]/15 text-[#ff5419]">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className={`text-lg font-bold tracking-tight mb-2 ${
                  isDarkMode ? 'text-white' : 'text-neutral-950'
                }`}>
                  {item.name}
                </h3>

                <p className={`text-xs leading-relaxed mb-4 ${
                  isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {item.description}
                </p>

                {/* Size selector if clothing */}
                {item.sizes && (
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-neutral-400 block mb-1.5 uppercase">
                      Tamanho:
                    </span>
                    <div className="flex gap-1.5">
                      {item.sizes.map((s) => (
                        <button
                          key={s}
                          onClick={() => setSelectedSizes({ ...selectedSizes, [item.id]: s })}
                          className={`w-7 h-7 rounded-lg text-[11px] font-bold border transition-colors cursor-pointer ${
                            (selectedSizes[item.id] || item.sizes![0]) === s
                              ? 'border-[#ff5419] bg-[#ff5419] text-white'
                              : isDarkMode 
                                ? 'border-neutral-800 text-neutral-400 hover:border-neutral-700' 
                                : 'border-neutral-200 text-neutral-700 hover:border-neutral-400'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-2">
                <div>
                  {item.priceBrl > 0 ? (
                    <div className="text-sm font-extrabold text-neutral-900 dark:text-white tabular-nums">
                      R$ {item.priceBrl.toFixed(2)}
                    </div>
                  ) : (
                    <div className="text-xs font-bold text-emerald-500">
                      Gratuito com Mérito
                    </div>
                  )}

                  <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-amber-600 dark:text-amber-400">
                    <Coins className="w-3 h-3" />
                    <span>ou {item.focusCoins} Coins</span>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(item)}
                  className="py-2 px-3.5 rounded-xl text-xs font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white transition-all shadow-xs cursor-pointer flex items-center gap-1"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Adicionar</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
          <div className={`w-full max-w-md h-full p-6 flex flex-col justify-between overflow-y-auto ${
            isDarkMode ? 'bg-neutral-950 text-white border-l border-neutral-800' : 'bg-white text-neutral-900 border-l border-neutral-200'
          }`}>
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#ff5419]" />
                  <h3 className="font-bold text-base">Sua Sacola Focus Store</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded-lg hover:bg-neutral-800/20 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="py-16 text-center text-xs text-neutral-500">
                  <ShoppingBag className="w-8 h-8 mx-auto mb-2 opacity-30" />
                  <p>Sua sacola está vazia.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-3 text-[#ff5419] font-bold"
                  >
                    Ver catálogo de produtos
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-start justify-between gap-3 text-xs">
                      <div className="flex-1">
                        <h4 className="font-bold leading-tight">{item.product.name}</h4>
                        {item.size && (
                          <span className="text-[11px] text-neutral-400 block mt-0.5">
                            Tamanho: {item.size}
                          </span>
                        )}
                        <div className="mt-1 font-mono font-semibold text-neutral-700 dark:text-neutral-300">
                          {item.product.priceBrl > 0 ? `R$ ${item.product.priceBrl.toFixed(2)}` : 'Voucher de Mérito'} · {item.product.focusCoins} Coins
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold">x{item.quantity}</span>
                        <button
                          onClick={() => removeFromCart(idx)}
                          className="text-neutral-400 hover:text-rose-500 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-medium text-neutral-500">
                  <span>Subtotal em R$:</span>
                  <span className="font-bold text-neutral-900 dark:text-white text-sm">
                    R$ {totalBrl.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium text-amber-600 dark:text-amber-400">
                  <span className="flex items-center gap-1">
                    <Coins className="w-3.5 h-3.5" />
                    <span>Equivalente em Focus Coins:</span>
                  </span>
                  <span className="font-bold font-mono">
                    {totalCoins} Coins
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2 pt-2">
                  <button
                    onClick={handleCheckoutWithCoins}
                    className="w-full py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-neutral-950 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Coins className="w-4 h-4" />
                    <span>Resgatar com Focus Coins ({focusCoinsBalance} disponíveis)</span>
                  </button>

                  {totalBrl > 0 && (
                    <button
                      onClick={handleCheckoutWithBrl}
                      className="w-full py-2.5 rounded-xl text-xs font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white transition-all cursor-pointer"
                    >
                      Pagar com Cartão / Pix (R$ {totalBrl.toFixed(2)})
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
