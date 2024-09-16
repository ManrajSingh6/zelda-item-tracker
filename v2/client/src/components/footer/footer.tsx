export function Footer(): JSX.Element {
  return (
    <div className='flex items-center justify-center gap-6 py-6'>
      <p className='text-sm text-accent'>Made by Manraj.</p>
      <p className='text-sm text-accent'>
        Checkout my{' '}
        <a
          href='https://manrajsingh.netlify.app/'
          target='_blank'
          className='text-accentIndigo hover:text-royalPurple'
        >
          portfolio!
        </a>
      </p>
      <p className='text-sm text-accent'>
        View the{' '}
        <a
          href='https://github.com/ManrajSingh6/zelda-item-tracker'
          target='_blank'
          className='text-accentIndigo hover:text-royalPurple'
        >
          source code!
        </a>
      </p>
    </div>
  )
}
