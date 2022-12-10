import React from 'react';

class TeamPickerComponent extends React.Component
{
    render()
    {
        return (
            <div class="teampicker">
                <div class="teampicker_dropdown">
                    <button class="teampicker_dropdown_button">Zobacz SU z wybranego rocznika</button>
                    <div class="teampicker_dropdown_content">
                        <a href="/team/">2022/23</a>
                        <a href="/team_2021_2022/">2021/22</a>
                        <a href="/team_2020_2021/">2020/21</a>
                        <a href="/team_2019_2020/">2019/20</a>
                    </div>
                </div>
            </div>
        );
    }
}