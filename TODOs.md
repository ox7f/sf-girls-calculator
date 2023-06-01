# TODOs

- [] workflow - draw chart
- [] pve / pvp mode for calculator (single target (noa bootcamp) vs ditto with enemy team)
- [] tutorial: how to use calculator (Akina or some sprite with a speech bubble => text written animation) => save in localStorage when closed so it doesn't show another time

## clean code

- [x] move handle functions inside class -> clean code, follow oop (no stinky code allowed)
- [x] refactor search component
- [x] refactor types, each one in a separate file
- [x] work with initialized objects instead of raw data

## game update

- [x] add Sora X and Sally to agents
- [x] add Yukako X to agents

## must have

- [] collect game data (projectiles, cast time, etc.)
- [x] stackable effects
- [x] stackable dot effect
- [x] implement number of projectiles
- [x] implement projectile travel speed
- [x] handle cast animations logic better (add global cast time)
- [x] implement evo tree
- [] add new target (ditto: target with evo tree) to UI
- [] add runes to UI
- [] add seekers to UI

## should have

- [x] clear button for search
- [x] fix graph (handle multiple dots on the same position)
- [x] changelog on entry page
- [x] unselect all selected agents button
- [x] fill changelog with content
- [x] save results and compare them (history?: list where the last result is compared with the current)
- [x] favorite agents
- [] add rune finder tool to UI

## nice to have

- [x] UI overhaul with graphs to customize selected agents on the fly => result will update on change
- [x] better tooltip for graph (show action name, time, damage...)
- [x] frontend: select 20 agents and bruteforce best combination
- [x] show results from teamfinder
- [x] improve logging
- [x] switch from localstorage to idx
- [x] move calculation to web worker (teamfinder blocks event loop)
- [x] sort table by damage
- [x] sticky search bar (scrolls with)
- [x] agent skill/bio inside modal (tabs: bio/stats/skill)
- [x] zoom function for graph
- [x] filter functions (class, rarity)
- [x] sort function (ascending, descending by name | class | rarity)
- [x] custom context-menu (actions: edit, favorite, select, equip runes?)

## UI/UX

- [x] adjust width/height of graph
- [x] good looking evo tree => overhaul
- [x] show critical hits or other bonuses (e.g. evo node: headshot, instant reload) in graph
- [x] add images
- [x] switch between views (show either table or graph not both)
- [x] button overhaul
- [x] modal overhaul
- [x] search bar overhaul
- [x] calculator overhaul
- [x] teamfinder overhaul
- [x] graph overhaul
- [x] open/close results => accordion
- [x] star favorites
- [x] teamfinder change (button for calculation and show results instead of cards + clear button)
- [x] avatar in agent list
- [x] search bar: show results in dropdown
- [x] fix spinner => should be centered and sticky
- [x] style the favorite star
- [] add animations and effects on new elements
- [] replace percentile height and with with fixed values

## code changes

- [x] log damage events (is_crit, is_headshot, nodes etc)
- [x] dots don't crit!
- [x] move isStackable from Skill to Effect
- [x] idx holds state of selection and modal
- [x] apply buffs on attack (Sora X, Kagawa Matsu, Sally)
- [x] add rarity to agents
- [] adjust/calibrate calculator
- [] make skill editable

## feedback

- [x] /calculator with demo result (pre selected agent(s) and target)
- [x] edit button in table or in sidebar to adjust agents on the fly
- [x] reset button resets also edited agents
- [x] update result on every change (agent / target) => no calculate button needed
- [x] filtered agents not updated when changing view/route (search reset but not filtered agents)
- [x] placeholder and or tooltip info for agent edit modal (crit rate 1 = 100%, 0.80 = 80%)
- [x] chrome => modal not opening with one click, needs two clicks
- [x] reset filter when changing route or separate them
- [x] remove projectile number / skill cast time from edit modal
- [x] only show one graph/table for calculator view
- [x] teamfinder: overflow when selecting an agent
- [x] card (onHover) => image should not move upwards / improve animation
