import Control from '../../../control';

export enum BadgeType {
    learned = 'learned',
    hard = 'hard',
    process = 'process',
}

export const createBadge = (type?: BadgeType) => {
    const wrapper = new Control(null, 'div', `card__badge`);
    const iconLearned = new Control(
        wrapper.node,
        'div',
        'card__badge-icon card__badge-icon_learned card__badge-icon_disabled'
    );
    const iconHard = new Control(
        wrapper.node,
        'div',
        `card__badge-icon card__badge-icon_hard card__badge-icon_disabled`
    );
    // const iconStat = new Control(wrapper.node, 'div', 'card__badge-icon_stat');
    // iconStat.node.innerHTML = `
    // <svg viewBox="0 0 512 512"><title/><path d="M104,496H72a24,24,0,0,1-24-24V328a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,104,496Z"/><path d="M328,496H296a24,24,0,0,1-24-24V232a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,328,496Z"/><path d="M440,496H408a24,24,0,0,1-24-24V120a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,440,496Z"/><path d="M216,496H184a24,24,0,0,1-24-24V40a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,216,496Z"/></svg>
    // `;
    iconHard.node.innerHTML = `
      <svg viewBox="0 0 32 32" xml:space="preserve"><style type="text/css">
        .st0{fill:#FFFFFF;}
        </style><g><g><path d="M26,7H9C8.4,7,8,6.6,8,6s0.4-1,1-1h17c0.6,0,1,0.4,1,1S26.6,7,26,7z"/></g><path d="M26,8h-9v13l-3-1l-3,1V8H9C7.9,8,7,7.1,7,6s0.9-2,2-2h17c0.6,0,1-0.4,1-1s-0.4-1-1-1H9C6.8,2,5,3.8,5,6v20c0,2.2,1.8,4,4,4   h17c0.6,0,1-0.4,1-1V9C27,8.4,26.6,8,26,8z"/></g></svg>
    `;
    iconLearned.node.innerHTML = `
      <svg viewBox="0 0 64 64"><title/><g id="Award"><path d="M32,9.59A15.94,15.94,0,1,0,47.94,25.53,15.9572,15.9572,0,0,0,32,9.59ZM43.22,24.48l-3.98,4.27.7,5.81a1.8275,1.8275,0,0,1-.75,1.73,1.8778,1.8778,0,0,1-1.1.36,1.9688,1.9688,0,0,1-.79-.17L32,34.01l-5.3,2.47a1.89,1.89,0,0,1-1.89-.19,1.8275,1.8275,0,0,1-.75-1.73l.7-5.81-3.98-4.27a1.868,1.868,0,0,1,1.01-3.11l5.74-1.12,2.84-5.11A1.8556,1.8556,0,0,1,32,14.18a1.836,1.836,0,0,1,1.63.96l2.84,5.11,5.74,1.12a1.868,1.868,0,0,1,1.01,3.11Z"/><path d="M35.88,47.18c.16-.1.32-.18.48-.27h.01a5.3193,5.3193,0,0,1,.5-.21,5.7942,5.7942,0,0,1,1.08-.31l.18-.03a2.9092,2.9092,0,0,1,.31-.04.7569.7569,0,0,1,.15-.01,4.3613,4.3613,0,0,1,.51-.03h.05a.41.41,0,0,1,.11.01,5.3961,5.3961,0,0,1,.56.03q.3.03.6.09c.15.03.3.05.43.07a2.6361,2.6361,0,0,0,.38.03h.09a4.2655,4.2655,0,0,0,1.94-.46,4.6092,4.6092,0,0,0,.72-.46,3.7268,3.7268,0,0,0,.3-.26,2.8033,2.8033,0,0,0,.41-.43,2.1454,2.1454,0,0,0,.18-.24,3.6113,3.6113,0,0,0,.23-.36,2.211,2.211,0,0,0,.18-.34,3.6565,3.6565,0,0,0,.18-.46,5.9925,5.9925,0,0,1,.47-1.07,4.4993,4.4993,0,0,1,.42-.65,3.5529,3.5529,0,0,1,.23-.31,2.3484,2.3484,0,0,1,.26-.29l.27-.27c.01-.01.02-.02.03-.02a1.4309,1.4309,0,0,1,.15-.11c-.01,0-.02.01-.03.01a6.2462,6.2462,0,0,1,2.25-1.33,4.3722,4.3722,0,0,0,3-4.14,4.6445,4.6445,0,0,0-.1-.9,6.3628,6.3628,0,0,1,1.48-5.51.01.01,0,0,1,.01-.01,4.3727,4.3727,0,0,0,0-5.8,6.36,6.36,0,0,1-1.49-5.52,4.6445,4.6445,0,0,0,.1-.9,4.3683,4.3683,0,0,0-3.01-4.14,6.3432,6.3432,0,0,1-4.04-4.05,4.4887,4.4887,0,0,0-.71-1.33,4.4045,4.4045,0,0,0-3.43-1.67,4.6445,4.6445,0,0,0-.9.1,6.3968,6.3968,0,0,1-5.51-1.48A4.3711,4.3711,0,0,0,29.1,4.1a.47.47,0,0,1-.12.09,6.2294,6.2294,0,0,1-5.4,1.4,4.6445,4.6445,0,0,0-.9-.1,4.37,4.37,0,0,0-3.42,1.67,4.2979,4.2979,0,0,0-.72,1.33,6.336,6.336,0,0,1-4.05,4.05,4.3722,4.3722,0,0,0-3,4.14,4.6445,4.6445,0,0,0,.1.9,6.3912,6.3912,0,0,1,.13,1.28,6.337,6.337,0,0,1-1.61,4.23,4.3711,4.3711,0,0,0-.01,5.81,6.36,6.36,0,0,1,1.49,5.52,4.6445,4.6445,0,0,0-.1.9,4.3683,4.3683,0,0,0,3.01,4.14,5.9906,5.9906,0,0,1,2.37,1.44c.01,0,.03.02.04.03a6.8541,6.8541,0,0,1,.52.55,6.3143,6.3143,0,0,1,.64.95,6.0864,6.0864,0,0,1,.47,1.08,4.0731,4.0731,0,0,0,.38.82,1.7482,1.7482,0,0,0,.18.29,2.322,2.322,0,0,0,.22.3,1.9359,1.9359,0,0,0,.2.21.7518.7518,0,0,0,.15.16,1.2667,1.2667,0,0,0,.13.11,1.6379,1.6379,0,0,0,.25.21,1.8955,1.8955,0,0,0,.33.22,1.1815,1.1815,0,0,0,.29.16c.01.02.02.03.04.03a3.7,3.7,0,0,0,.74.3,3.4819,3.4819,0,0,0,1.25.19h.07a2.1364,2.1364,0,0,0,.34-.03,4.4681,4.4681,0,0,0,.47-.07,6.3157,6.3157,0,0,1,5.44,1.42l.02.02h.01c.01.02.03.03.05.05a4.3727,4.3727,0,0,0,5.8,0c.02-.02.04-.03.06-.05.15-.13.31-.26.47-.38A4.9678,4.9678,0,0,1,35.88,47.18ZM32,43.47A17.94,17.94,0,1,1,49.94,25.53,17.9631,17.9631,0,0,1,32,43.47Z"/><path d="M16.64,44.13a4.202,4.202,0,0,0-1.11-1.76,4.2618,4.2618,0,0,0-.58-.47L9.13,53.08a1.0076,1.0076,0,0,0,.81,1.46l6.04.45,3.79-7.19A6.3948,6.3948,0,0,1,16.64,44.13Z"/><path d="M27.77,49.4c-.01-.02-.03-.03-.05-.05a4.3535,4.3535,0,0,0-2.86-1.07,4.8145,4.8145,0,0,0-.9.09,6.0646,6.0646,0,0,1-2.27.06l-3.92,7.44,3.91,4.76a.9711.9711,0,0,0,.77.37.34.34,0,0,0,.1-.01.99.99,0,0,0,.79-.53L28.73,50.1a6.273,6.273,0,0,1-.95-.7Z"/><path d="M41.32,48.51a7.0183,7.0183,0,0,1-1.28-.14,4.8145,4.8145,0,0,0-.9-.09,4.324,4.324,0,0,0-2.9,1.11,6.0273,6.0273,0,0,1-.97.71l5.39,10.36a.99.99,0,0,0,.79.53.34.34,0,0,0,.1.01.9711.9711,0,0,0,.77-.37l3.85-4.69-3.92-7.5A5.6538,5.6538,0,0,1,41.32,48.51Z"/><path d="M49.05,41.89a4.195,4.195,0,0,0-1.69,2.24,6.3978,6.3978,0,0,1-3.18,3.69L47.94,55l6.11-.46a1.0067,1.0067,0,0,0,.82-1.46Z"/></g></svg>
    `;
    iconHard.node.setAttribute('data-process', 'hard');
    iconLearned.node.setAttribute('data-process', 'learned');
    new Control(iconHard.node, 'span', 'card__badge-tooltip', 'Add to Dictionary');
    new Control(iconLearned.node, 'span', 'card__badge-tooltip', 'Tag as learned');
    // new Control(iconStat.node, 'span', 'card__badge-tooltip', 'Word statistics');
    if (type && type !== 'process') {
        (wrapper.node.querySelector(`[data-process="${type}"]`) as HTMLElement).classList.remove(
            'card__badge-icon_disabled'
        );
    }
    iconHard.node.onclick = handleClick;
    iconLearned.node.onclick = handleClick;
    return wrapper.node;
};

const handleClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const el = target.closest('div') as HTMLElement;
    const disabledClass = 'card__badge-icon_disabled';
    const card = el.closest('.card') as HTMLElement;
    if (el.classList.contains(disabledClass)) {
        card.querySelectorAll('.card__badge-icon').forEach((e) => {
            e.classList.add(disabledClass);
        });
        el.classList.remove(disabledClass);
    } else {
        el.classList.add(disabledClass);
    }
    const id = card.dataset.id;
    const status = el.dataset.process;
    const event = new CustomEvent('cardWordToggle', { detail: { id: id, type: status } });
    document.dispatchEvent(event);
};
