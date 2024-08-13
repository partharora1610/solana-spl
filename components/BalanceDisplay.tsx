import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { FC, useEffect, useState } from "react"

export const BalanceDisplay: FC = () => {
  const [balance, setBalance] = useState(0)
  const { connection } = useConnection()
  const { publicKey } = useWallet()

  useEffect(() => {
    const fetcHUserBalance = async () => {
      if (!connection || !publicKey) {
        return
      }
      const userInfo = await connection.getAccountInfo(publicKey)

      const bal = userInfo.lamports
      setBalance(bal)
    }

    fetcHUserBalance()
  }, [connection, publicKey])

  return (
    <div>
      <p>{publicKey ? `SOL Balance: ${balance / LAMPORTS_PER_SOL}` : ""}</p>
    </div>
  )
}
