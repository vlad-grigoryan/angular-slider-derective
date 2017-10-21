export default function sliderPageController() {
    let sliderVm = this;
    sliderVm.items = [
        {id:1, data:"<p>Paragraph 1</p>"},
        {id:2, data:"<h2>Paragraph 2</h2>"},
        {id:3, data:"<img src='images/google.png' width='800' height='300'/>"},
        {id:3, data:`<table width="100%">
                        <tr>
                            <th>Test</th>
                            <th>Test</th>
                            <th>Test</th>
                        </tr>
                        <tr>
                            <td>Value</td>
                            <th>Value</th>
                            <th>Value</th>
                        </tr>
                    </table>`
        }
    ];
}