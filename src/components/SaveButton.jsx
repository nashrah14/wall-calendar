import { useState } from "react";

export default function SaveButton({
onClick,
noteInput,
savedVal
}) {

const [saved,setSaved]=useState(false);

function handle(){
onClick();
setSaved(true);
setTimeout(()=>setSaved(false),1800);
}

return(
<button
className={`save-btn${saved?" saved":""}`}
onClick={handle}
>
{saved?"✓ Saved":"Save ⌘S"}
</button>
);
}