// 产品接口中将声明所有具体产品都必须实现的操作。
interface Button {
    render: () => any;
    onClick: (f) => any
}


class WindowButton implements Button {
    render() {
        console.log(11)
    };

    onClick() {

    }
}

class HTMLButton implements Button {
    render() {
        console.log(11)
    };

    onClick() {

    }
}


class Dialog {
    createButton(): Button {
        return new WindowButton() || new HTMLButton();
    }

    render() {
        const obButton: Button = this.createButton()
        obButton.onClick(() => {
        })
        obButton.render();
    }
}

class WindowDialog extends Dialog {
    createButton(): Button {
        return new WindowButton();
    }
}

class WebDialog extends Dialog {
    createButton(): Button {
        return new HTMLButton()
    }
}

class Application {
    dialog: Dialog;
    config: {
        OS: string
    };

    initialize() {
        if (this.config.OS === 'Windows') {
            this.dialog = new WindowDialog();
        } else {
            this.dialog = new WebDialog();
        }
    }

    main() {
        this.initialize();
        this.dialog.render()
    }
}