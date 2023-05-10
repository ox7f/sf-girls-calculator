# TODOs

## chatGPT suggestions

- [] Add visual elements: Consider adding graphics, images or videos that relate to your website's theme or content. You could use screenshots of the game, or create custom graphics that showcase the calculator functionality. This will make your website look more visually appealing and engaging. (gif for selecting agents/target, gif for editing agent/target, gif for teamfinder)
- [] Incorporate social proof: Consider adding social proof, such as the number of people who have used the calculator, or how long it has been in operation. This will help visitors understand that your website is a reputable source of information.
- [] Add calls to action: Consider adding calls to action, such as "Start Calculating Now", or "Join Our Community", to encourage visitors to engage with your website.

## clean code

- [x] move handle functions inside class -> clean code, follow oop (no stinky code allowed)
- [x] refactor search component
- [x] refactor types, each one in a separate file
- [x] work with initialized objects instead of interfaces

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
- [] fill changelog with content
- [] add rune finder tool to UI
- [] save results and compare them (history? (list where the last result is compared with the current - for example +25% damage or -20% damage))

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
- [] filter functions in UI

## UI/UX

- [] adjust width/height of graph
- [x] good looking evo tree => overhaul
- [x] show critical hits or other bonuses (e.g. evo node: headshot, instant reload) in graph
- [x] add images
- [x] switch between views (show either table or graph not both)
- [x] button overhaul
- [x] modal overhaul
- [x] search bar overhaul
- [x] calculator overhaul
- [x] teamfinder overhaul
- [] graph overhaul
- [] graph logs overhaul

## code changes

- [x] log damage events (is_crit, is_headshot, nodes etc)
- [x] dots don't crit!
- [x] move isStackable from Skill to Effect

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
