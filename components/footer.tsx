import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer>
      <small className="flex justify-center mb-2">
          &copy; {new Date().getFullYear()} kt. Designed by&nbsp;
          <Link className="underline" href="https://github.com/t03t">Khadija</Link>
          &nbsp; - &nbsp;👧🏽
      </small>
    </footer>

  )
}
