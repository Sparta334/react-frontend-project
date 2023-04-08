import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthComponent( { ProviderSite } ) {
    const { data: session } = useSession()
    if (session) {
      return (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut(ProviderSite)}>Sign out</button>
        </>
      )
    }
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn(ProviderSite)}>Sign in</button>
      </>
    )
  }