import { ChipList } from '@syncfusion/ej2-buttons';
/**
 * Default Chip sample
 */
 let defaultData = [
    {
        "text": "Apple",
        "cssClass": "e-primary"
    },
    {
        "text": "Microsoft",
        "cssClass": "e-info"
    },
    {
        "text": "Google",
        "cssClass": "e-success"
    },
    {
        "text": "Tesla",
        "cssClass": "e-warning"
    },
    {
        "text": "Intel",
        "cssClass": "e-danger"
    }
    ];

    let avatarData = [{
        "text": "Anne",
        "leadingIconCss": "anne"
    },
    {
        "text": "Janet",
        "leadingIconCss": "janet"
    },
    {
        "text": "Laura",
        "leadingIconCss": "laura"
    },
    {
        "text": "Margaret",
        "leadingIconCss": "margaret"
    }
    ];
    let filterData = [{
        "text": "Extra small"
    },
    {
        "text": "Small"
    },
    {
        "text": "Medium"
    },
    {
        "text": "Large"
    },
    {
        "text": "Extra large"
    }
    ];
    let choiceData = [{
        "text": "Send a text",
        "leadingIconCss": "text"
    },
    {
        "text": "Set a reminder",
        "leadingIconCss": "alarm"
    },
    {
        "text": "Read my emails",
        "leadingIconCss": "mail"
    },
    {
        "text": "Play a game",
        "leadingIconCss": "game"
    }];

    // initialize default chip
    new ChipList({ chips: defaultData }, '#chip-default');

    // initialize avatar chip
    new ChipList({ chips: avatarData, enableDelete: true }, '#chip-avatar');

    // initialize filter chip
    new ChipList({ chips: filterData, selection: 'Multiple', selectedChips: [1, 3] }, '#chip-filter');

    // initialize choice chip
    new ChipList(
        {
            chips: choiceData, selection: 'Single', cssClass: 'e-outline',
            selectedChips: [1]
        },
        '#chip-choice');