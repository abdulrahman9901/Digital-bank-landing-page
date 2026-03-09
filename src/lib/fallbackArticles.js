export const FALLBACK_ARTICLES_LIST = [
  {
    title: 'Receive money in any currency with no fees',
    author: 'Claire Robinson',
    excerpt: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …",
    imageUrl: '/images/image-currency.jpg',
    slug: 'receive-money-in-any-currency-with-no-fees'
  },
  {
    title: 'Treat yourself without worrying about money',
    author: 'Wilson Hutton',
    excerpt: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
    imageUrl: '/images/image-restaurant.jpg',
    slug: 'treat-yourself-without-worrying-about-money'
  },
  {
    title: 'Take your Digitalbank card wherever you go',
    author: 'Wilson Hutton',
    excerpt: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …",
    imageUrl: '/images/image-plane.jpg',
    slug: 'take-your-digitalbank-card-wherever-you-go'
  },
  {
    title: 'Our invite-only Beta accounts are now live!',
    author: 'Claire Robinson',
    excerpt: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site …",
    imageUrl: '/images/image-confetti.jpg',
    slug: 'our-invite-only-beta-accounts-are-now-live'
  }
]

export const FALLBACK_ARTICLES_MAP = Object.fromEntries(
  FALLBACK_ARTICLES_LIST.map((a) => [a.slug, a])
)
