import React, { MouseEvent, useState } from "react"
import GetContractReadWrite from "./web3/GetContractReadWrite"


export default function ViewBadge(): any {
  const [badge, setBadge] = useState(null)
  const [badgeID, setBadgeID] = useState(0)

  async function handleClick(e: MouseEvent) {
    e.preventDefault()
    // alert("Clicked!")
    const contract: Promise<any> = await GetContractReadWrite()

    // @ts-ignore
    const badgeId = (await contract.getLatestId()).toNumber()
    setBadgeID(badgeId)

    // @ts-ignore
    const badge = await contract.getBadgesById(badgeId)
    setBadge(badge)
    // console.log("Badge: ", badge.tokenURIinfo)
  }

  return (
    <div>
      <button onClick={handleClick}>View Badge</button>
      {badge != 0 ?
        <span>Badge ID: {badgeID}</span> :
        <span></span>
      }
    </div>
  )
}
