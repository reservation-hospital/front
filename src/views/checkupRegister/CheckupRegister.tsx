"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./CheckupRegister.module.scss";
import Button from "@/components/Button/Button";
import TextInput from "@/components/TextField/TextInput/TextInput";
import Radio from "@/components/Radio/Radio";
import Body from "@/components/Body/Body";

const cx = cn.bind(styles);

const CheckupRegister = () => {
    const inputSize = { width: "313px", height: "48px" };
    return (
        <div className={cx("checkupRegisterWrapper")}>
            <div className={cx("background")}>
                <Body />
            </div>
            <section className={cx("checkupRegisterSection")}>
                <h1 className={cx("checkupRegisterTitle")}>건강 검진 등록</h1>
                <div className={cx("checkupRegisterContainer")}>
                    <div className={cx("selectHospital")}>
                        <div className={cx("hospitaltextInput")}>
                            <TextInput
                                label="선택 병원"
                                {...inputSize}
                                readOnly
                            />
                            <TextInput
                                label="선택 병원 주소"
                                {...inputSize}
                                readOnly
                            />
                            <TextInput
                                label="검진 상품 선택"
                                {...inputSize}
                                requiredSymbol="*"
                                readOnly
                            />
                        </div>
                        <div className={cx("reservationInfo")}>
                            <p>※ 예약시 주의사항</p>
                            <p>1. 최소 7일전 예약가능합니다.</p>
                            <p>
                                2. 선택하신 예약날짜와 시간은 예약확정이
                                아닙니다.
                            </p>
                            <div className={cx("warningText")}>
                                <p>
                                    병원에서 예약확정 연락을 받으시면 그때
                                    예약이 확정됩니다.
                                </p>
                                <p>이점 유의하시기 바랍니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx("reserverInfo")}>
                        <div className={cx("reserverTextInput")}>
                            <TextInput label="예약 희망 날짜" {...inputSize} />
                            <div className={cx("selectTIime")}>
                                <p>예약 희망 시간</p>
                                <div className={cx("selectTIimeInput")}>
                                    <input type="text" />
                                    <p>:</p>
                                    <input type="text" />
                                </div>
                            </div>
                            <TextInput
                                label="성 명"
                                {...inputSize}
                                requiredSymbol="*"
                                readOnly
                            />
                            <TextInput
                                label="생년월일"
                                {...inputSize}
                                requiredSymbol="*"
                                readOnly
                            />
                        </div>
                        <div className={cx("selectGender")}>
                            <span>성 별</span>
                            <span className={cx("requiredSymbol")}>*</span>
                            <div className={cx("selectGenderInput")}>
                                <Radio label="남자" name="type" value="m" />
                                <Radio label="여자" name="type" value="w" />
                            </div>
                        </div>
                        <div className={cx("reserverTextInput")}>
                            <TextInput
                                label="연락처"
                                {...inputSize}
                                requiredSymbol="*"
                                readOnly
                            />
                            <TextInput label="이메일" {...inputSize} />
                            <TextInput
                                label="주 소"
                                {...inputSize}
                                requiredSymbol="*"
                                readOnly
                            />
                        </div>
                        <button className={cx("addressBtn")}>검색</button>
                    </div>
                    <div className={cx("optionItem")}>
                        <p className={cx("optionItemInfo")}>
                            캔서파인드는 혈액을 이용하여 8개의 암종(유방암,
                            폐암, 간암, 위암, 췌장암, 난소암, 대장암,
                            전립선암)을 동시에 스크리닝할 수 있는 혁신적인
                            검사입니다.
                        </p>
                        <p className={cx("optionItemInfo")}>
                            아래 선택검사에서 검사희망 병원을 선택하여 주시면
                            전문 상담사가 전화드립니다.
                        </p>
                        <div className={cx("selectCheck")}>
                            <div>
                                <h1 className={cx("selectCheckTitle")}>
                                    선택검사 1
                                </h1>
                                <p className={cx("selectCheckSubTitle")}>
                                    (1개 선택)
                                </p>
                            </div>
                            <div className={cx("checkCategory")}>
                                <Radio
                                    label="강남 세브란스병원 헬스체크업센터"
                                    name="type"
                                    value="hospital"
                                />
                                <Radio
                                    label="하나로의료재단 종합센터"
                                    name="type"
                                    value="hospital"
                                />
                                <Radio
                                    label="하나로의료재단 강남센터"
                                    name="type"
                                    value="hospital"
                                />
                                <Radio
                                    label="광동병원 통합웰니스센터"
                                    name="type"
                                    value="hospital"
                                />
                                <Radio
                                    label="군포 지샘병원 건강검진센터"
                                    name="type"
                                    value="hospital"
                                />
                                <Radio
                                    label="창원 서울패밀리병원 AI건강증진센터"
                                    name="type"
                                    value="hospital"
                                />
                            </div>
                        </div>
                        <h1 className={cx("comment")}>비고</h1>
                        <p className={cx("commentInfo")}>
                            *병원에 전달하고자하는 내용이 있으신 경우 자유롭게
                            작성해주시기 바랍니다.
                        </p>
                        <input type="text" className={cx("commentInput")} />
                    </div>
                    <div className={cx("agreement")}>
                        <div className={cx("priceContainer")}>
                            <div className={cx("price")}>
                                <span>패키지비용</span>
                                <p>1,100,000</p>
                            </div>
                            <div className={cx("price")}>
                                <span>총 검진 비용</span>
                                <p>1,100,000</p>
                            </div>
                        </div>
                        <div>
                            <div className={cx("privacyPolicy")}>
                                <p>개인정보의 수집ㆍ이용 (필수 사항)</p>
                                <Radio
                                    label="위와 같이 개인정보를 수집ㆍ이용하는데 동의합니다."
                                    name="type"
                                    value="consentOption"
                                />
                            </div>
                            <div className={cx("privacyPolicy")}>
                                <p>
                                    개인정보의 제 3자 제공에 관한 동의(필수
                                    사항)
                                </p>
                                <Radio
                                    label="위와 같이 개인정보를 수집ㆍ이용하는데 동의합니다."
                                    name="type"
                                    value="consentOption"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx("registerBtn")}>
                        <Button
                            label="등록하기"
                            backgroundColor="#FFEA3C"
                            borderColor="#BFC662"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CheckupRegister;
