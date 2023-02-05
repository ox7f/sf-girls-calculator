export function get_critical_damage(damage: number, critical_rate: number, critical_damage: number) {
  if (Math.random() < critical_rate) {
    damage *= critical_damage;
  }

  return damage;
}
