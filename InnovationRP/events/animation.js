mp.events.add('animDig', (player) => {
    player.playAnimation('anim@heists@box_carry@', 'idle', 1, 49);
});

mp.events.add('animStop', (player) => {
    player.stopAnimation();
});

mp.events.add('animCase', (player) => {
    player.playAnimation('weapons@first_person@aim_rng@p_m_zero@misc@briefcase@aim_trans@unholster_to_rng', 'aim_trans_high', 1, 49)
})