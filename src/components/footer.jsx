import React, { useEffect } from 'react';
function Footer(){
     // Set current year in footer
        useEffect(() => {
            document.getElementById('current-year').textContent = new Date().getFullYear();
        }, []);
    return (
        <footer class="py-6 bg-slate-950 text-slate-400">
        <div class="container mx-auto px-4 text-center">
            <p>© <span id="current-year"></span> FACTORY GEAR. Tous droits réservés.</p>
            <p class="mt-2">Développé par <span class="text-primary">Abdelkhalek Essaidi</span></p>
        </div>
    </footer>
    )
}
export default Footer